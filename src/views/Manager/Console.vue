<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs color="indigo" centered show-arrows class="rounded-pill" v-model="tab">
          <v-tab><v-icon left>mdi-console-line</v-icon>命令行</v-tab>
          <v-tab><v-icon left>mdi-alert</v-icon>问题</v-tab>
          <v-tab><v-icon left>mdi-emoticon-dead</v-icon>崩溃记录</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-toolbar dense dark>
              <v-toolbar-items>
                <v-btn text @click="clean"><v-icon :left="$vuetify.breakpoint.smAndUp">mdi-delete</v-icon>{{ $vuetify.breakpoint.smAndUp ? '清空日志' : '' }}</v-btn>
                <v-btn text @click="scrollToBottom"><v-icon :left="$vuetify.breakpoint.smAndUp">mdi-format-vertical-align-bottom</v-icon>{{ $vuetify.breakpoint.smAndUp ? '移至底部' : '' }}</v-btn>
                <v-btn text><v-icon :left="$vuetify.breakpoint.smAndUp">mdi-code-tags</v-icon>{{ $vuetify.breakpoint.smAndUp ? '快捷指令' : '' }}</v-btn>
              </v-toolbar-items>
              <v-spacer/>
              <v-toolbar-items>
                <v-btn text @click="start"><v-icon left>mdi-play</v-icon>启动</v-btn>
                <v-btn text @click="stop"><v-icon left>mdi-pause</v-icon>停止</v-btn>
                <v-btn text><v-icon left>mdi-reload</v-icon>重启</v-btn>
                <v-btn text @click="reload"><v-icon left>mdi-sync</v-icon>重载</v-btn>
                <v-btn text><v-icon left>mdi-stop</v-icon>强制停止</v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-sheet height="700" width="auto" dark class="overflow-y-auto" id="sheet">
              <div id="console" style="height: 100%"></div>
            </v-sheet>
            <v-toolbar dark>
              <v-text-field single-line prefix="/" label="在这里输入您的指令" hide-details v-model="cmd">
                <v-btn text slot="append-outer" @click="send">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-text-field>
            </v-toolbar>
          </v-tab-item>
          <v-tab-item>
            <v-list rounded>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-alert</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Can't keep up!</v-list-item-title>
                <v-list-item-subtitle>服务器过载,TPS降低</v-list-item-subtitle>
                <v-list-item-action-text>
                  <v-chip color="indigo" label link outlined>查看详情</v-chip>
                </v-list-item-action-text>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'xterm/css/xterm.css'
import { Terminal } from 'xterm'
import {FitAddon} from "xterm-addon-fit";
import date from "moment";
export default {
  name: "Console",
  data: ()=> {
    return {
      term: null,
      tab: 0,
      timer: null,
      websocket: null,
      session: '',
      last: '',
      items: [
        {
          text: 'MinePanel',
          to: '/',
        },
        {
          text: '服务器管理',
          to: '/manager/dashboard',
        },
        {
          text: '控制台',
          to: '/manager/console',
        },
      ],
      cmd: '',
      logs: [],
    }
  },

  methods: {
    clean() {
      this.logs = []
      this.term.clear()
    },
    send() {
      if (this.cmd) {
        this.term.writeln('> ' + this.cmd)
        this.$http.get("http://localhost:8081/server/exec?id=1&token=test&cmd=" + this.cmd).then(function () {
          this.scrollToBottom()
        }, function () {
          this.scrollToBottom()
        })
        this.cmd = ''
      }
    },
    start() {
      this.$http.get('http://localhost:8081/server/start?id=1&token=test&cmd=java -jar %7Bfile%7D').then()
    },
    stop() {
      this.$http.get('http://localhost:8081/server/exec?id=1&token=test&cmd=stop').then()
    },
    reload() {
      this.$http.get('http://localhost:8081/server/exec?id=1&token=test&cmd=reload').then()
    },
    scrollToBottom() {
      this.$nextTick(() => {
        let sheet = document.getElementById('sheet')
        sheet.scrollTop = sheet.scrollHeight
      })
    },
    updateLog() {
      this.term.clear()
      let j=0
      let len = 0
      for (j = 0,len=this.logs.length; j < len; j++) {
        this.term.writeln(this.logs[j])
        this.scrollToBottom()
      }
    },
    initConsole() {
      this.$nextTick(() => {
        const term = new Terminal({
          fontSize: 14,
          disableStdin: true,
          theme: {
            background: '#2f2f2f',
          }
        });
        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        term.open(document.getElementById('console'));
        fitAddon.fit();
        term.focus();
        this.term = term
      })
    },
    connectDaemon() {
      this.$http.get("http://localhost:8081/server/log?id=1&token=test").then(function (result) {
        this.term.writeln('[' + date(this.getTime()).format('HH:mm:ss') + ' ' + '面板' + ']: ' + 'Daemon Connected')
        if (result.data.code === '200') {
          this.logs = result.data.msg
        } else {
          this.term.writeln('[' + date(this.getTime()).format('HH:mm:ss') + ' ' + 'Daemon' + ']: ' + result.data.msg)
        }
        this.$http.get("http://localhost:8081/session/create?id=1&token=test").then(function (result) {
          this.session = result.data.msg
          this.initWebSocket()
        })
      }, function () {
        this.term.writeln('[' + date(this.getTime()).format('HH:mm:ss') + ' ' + '面板' + ']: ' + 'Daemon connect failed. Please reopen the console to retry')
      })
    },
    getTime() {
      return new Date()
    },
    initWebSocket() {
      this.websocket = new WebSocket("ws://localhost:8081/websocket/" + this.session)
      this.websocket.onopen = this.onopen
      this.websocket.onerror = this.onerror
      this.websocket.onmessage = this.onmessage
      this.websocket.onclose = this.onclose
    },
    onopen() {
      //
    },
    onerror() {
      //
    },
    onmessage(msg) {
      let data = JSON.parse(msg.data)
      if (data.type === 'log' && data.msg !== this.last) {
        this.last = data.msg
        this.term.writeln(data.msg)
        this.scrollToBottom()
      }
      if (data.type === 'status') {
        this.term.writeln('[' + date(this.getTime()).format('HH:mm:ss') + ' ' + '面板' + ']: ' + 'Server is ' + data.msg)
      }
    },
    onclose() {
      //
    }
  },
  created() {
    this.initConsole()
    this.connectDaemon()
  },
  beforeDestroy() {
    this.websocket.close()
  },
  watch: {
    logs() {
      this.updateLog();
    }
  },
}
</script>

<style scoped>
</style>