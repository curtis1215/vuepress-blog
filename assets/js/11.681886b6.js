(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{220:function(n,e,t){"use strict";t.r(e);var s=t(0),v=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"安裝作業"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業"}},[n._v("#")]),n._v(" 安裝作業")]),n._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),t("p",[n._v("【參考文件】： "),t("a",{attrs:{href:"https://cli.vuejs.org/guide/prototyping.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Vue CLI"),t("OutboundLink")],1)])]),n._v(" "),t("h3",{attrs:{id:"安裝前準備"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝前準備"}},[n._v("#")]),n._v(" 安裝前準備")]),n._v(" "),t("p",[n._v("Vue CLI 需搭配 Node.js 版本 8.11.0+ 。故請先用以下指令檢查目前使用中之 Node.js 版本。")]),n._v(" "),t("pre",[t("code",[n._v("$ node -v\n")])]),n._v(" "),t("h3",{attrs:{id:"執行安裝指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#執行安裝指令"}},[n._v("#")]),n._v(" 執行安裝指令")]),n._v(" "),t("pre",[t("code",[n._v("$ npm install -g @vue/cli\n")])]),n._v(" "),t("p",[n._v("或")]),n._v(" "),t("pre",[t("code",[n._v("$ yarn global add @vue/cli\n")])]),n._v(" "),t("h3",{attrs:{id:"驗證安裝成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#驗證安裝成功"}},[n._v("#")]),n._v(" 驗證安裝成功")]),n._v(" "),t("pre",[t("code",[n._v("$ vue --version\n@vue/cli 4.0.4\n")])]),n._v(" "),t("h2",{attrs:{id:"值得安裝的-vs-code-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#值得安裝的-vs-code-extensions"}},[n._v("#")]),n._v(" 值得安裝的 VS Code Extensions")]),n._v(" "),t("p",[n._v("採用 VS Code 作為程式編輯器者，可安裝下列之 Extensions，使 Vue.js App 開發作業更加順暢。")]),n._v(" "),t("ul",[t("li",[n._v("Vetur")]),n._v(" "),t("li",[n._v("Vue VSCode Snippets")]),n._v(" "),t("li",[n._v("Vue VS Code Extension Pack")]),n._v(" "),t("li",[n._v("Vue 2 Snippets")])]),n._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),t("p",[n._v("【參考文件】： "),t("a",{attrs:{href:"https://www.kayee.nl/2019/03/11/best-visual-studio-code-vue-js-extensions-for-sitecore-jss-development/",target:"_blank",rel:"noopener noreferrer"}},[n._v("BEST VISUAL STUDIO CODE VUE.JS EXTENSIONS FOR SITECORE JSS DEVELOPMENT"),t("OutboundLink")],1)])]),n._v(" "),t("h2",{attrs:{id:"node-js-版本控管工具：n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-版本控管工具：n"}},[n._v("#")]),n._v(" Node.js 版本控管工具：n")]),n._v(" "),t("h3",{attrs:{id:"使用-n-進行版本控管"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-n-進行版本控管"}},[n._v("#")]),n._v(" 使用 n 進行版本控管")]),n._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),t("p",[n._v("【參考文件】： "),t("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[n._v("n – Interactively Manage Your Node.js Versions"),t("OutboundLink")],1)])]),n._v(" "),t("ol",[t("li",[t("p",[n._v("安裝 n ：不使用 brew ，改用 n-install 方式安裝：")]),n._v(" "),t("pre",[t("code",[n._v("$ curl -L https://git.io/n-install | bash\n\n\n$ which n\n/Users/<UserName>/n/bin/n\n")])]),n._v(" "),t("p",[n._v("【註】： 使用 brew install n 安裝，其安裝路徑如下")]),n._v(" "),t("pre",[t("code",[n._v("$ which n\n/usr/local/bin/n\n\n$ ls -al /usr/local/bin/n\nlrwxr-xr-x  1 <UserName>  admin  23 10 19 10:37 /usr/local/bin/n -> ../Cellar/n/6.0.1/bin/n\n")])])]),n._v(" "),t("li",[t("p",[n._v("設定環境變數 PATH ，以便 n 能順利執行。")]),n._v(" "),t("p",[n._v("n-install 於安裝結束時，自動在 Shell 設定檔："),t("code",[n._v("~/.bash_profile")]),n._v(" (Bash Shell)，或 "),t("code",[n._v("~/.zshrc")]),n._v(" (ZSH Shell) ，加入如下之 PATH 相關設定，以便 "),t("strong",[t("code",[n._v("$HOME/n/bin")])]),n._v(" 路徑也能加入環境變數 PATH 之中。")]),n._v(" "),t("pre",[t("code",[n._v('export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"\n')])])]),n._v(" "),t("li",[t("p",[n._v("重新啟動 Shell 。")]),n._v(" "),t("pre",[t("code",[n._v("$ source ~/.bash_profile\n")])]),n._v(" "),t("p",[n._v("或")]),n._v(" "),t("pre",[t("code",[n._v("$ source ~/.zshrc\n")])])])]),n._v(" "),t("h3",{attrs:{id:"解除安裝作業"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解除安裝作業"}},[n._v("#")]),n._v(" 解除安裝作業")]),n._v(" "),t("p",[n._v("使用 n-install 方式安裝， n 會安裝在以下目錄路徑：")]),n._v(" "),t("pre",[t("code",[n._v("$HOME/n/bin\n")])]),n._v(" "),t("p",[n._v("欲解除安裝，可透過 n-install 其自行提供的工具 n-uninstall 完成。")]),n._v(" "),t("pre",[t("code",[n._v("$ n-uninstall\n")])]),n._v(" "),t("p",[n._v("記得 "),t("code",[n._v("~/.bash_profile")]),n._v(", "),t("code",[n._v("~/.zshrc")]),n._v(" 檔案，對於「環境變數」與 PATH 相關的設定亦需取消。")]),n._v(" "),t("p",[n._v("以 Bash Shell 為例：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("啟動文字編輯器。")]),n._v(" "),t("pre",[t("code",[n._v(" $ vim ~/.bash_profile \n")])])]),n._v(" "),t("li",[t("p",[n._v("刪除以下這段設定。")]),n._v(" "),t("pre",[t("code",[n._v(' export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"\n')])])]),n._v(" "),t("li",[t("p",[n._v("取消已設定之環境變數。")]),n._v(" "),t("pre",[t("code",[n._v(" $ unset N_PREFIX\n")])])]),n._v(" "),t("li",[t("p",[n._v("重載 Bash Shell 設定。")]),n._v(" "),t("pre",[t("code",[n._v(" $ source ~/.bash_profile\n")])])])]),n._v(" "),t("h3",{attrs:{id:"n-版本控管常用操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#n-版本控管常用操作"}},[n._v("#")]),n._v(" n 版本控管常用操作")]),n._v(" "),t("p",[t("strong",[n._v("安裝 LTS 版本")])]),n._v(" "),t("pre",[t("code",[n._v("$ n lts\n\n  installing : node-v10.16.3\n       mkdir : /Users/alanjui/n/n/versions/node/10.16.3\n       fetch : https://nodejs.org/dist/v10.16.3/node-v10.16.3-darwin-x64.tar.gz\n   installed : v10.16.3 to /Users/alanjui/n/bin/node\n      active : v12.12.0 at /usr/local/bin/node\n")])]),n._v(" "),t("p",[t("strong",[n._v("安裝最近發行版本")])]),n._v(" "),t("pre",[t("code",[n._v("$ n latest\n\n  installing : node-v12.12.0\n       mkdir : /Users/alanjui/n/n/versions/node/12.12.0\n       fetch : https://nodejs.org/dist/v12.12.0/node-v12.12.0-darwin-x64.tar.gz\n   installed : v12.12.0 to /Users/alanjui/n/bin/node\n      active : v12.12.0 at /usr/local/bin/node\n")])]),n._v(" "),t("p",[t("strong",[n._v("查詢已安裝各版本")])]),n._v(" "),t("pre",[t("code",[n._v("$ n ls\nnode/10.16.3\nnode/12.12.0\n")])]),n._v(" "),t("p",[t("strong",[n._v("切換版本")])]),n._v(" "),t("pre",[t("code",[n._v("$ n\n\n    node/10.16.3\n    node/12.12.0\n\nUse up/down arrow keys to select a version, return key to install, q to quit\n")])]),n._v(" "),t("p",[n._v("然後使用上、下鍵，標示欲擇用版本，按《Enter》鍵。")])])}),[],!1,null,null,null);e.default=v.exports}}]);