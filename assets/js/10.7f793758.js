(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{219:function(a,n,t){"use strict";t.r(n);var e=t(0),s=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在 Ubuntu 作業系統，可使用 virt-manager 管理符合 Libvirt API 規格之「虛擬機器（VM：Virtual Machine）」。")]),a._v(" "),t("p",[a._v("VM 之建置作業，採用 Vagrant Box 建置 VM 可降低不少時間。但 Vagrant Box 預設之 VM 執行環境為：VirtualBox。 若不熟悉這些「眉角」，每當執行 "),t("strong",[a._v("vagrant up")]),a._v(" 指令後，總會在終端機看到 VM 無法正常啟動的錯誤訊息。")]),a._v(" "),t("p",[a._v("本文件用於指引：在 Ubuntu 18.04 作業系統，如何正確安裝 Vagrant Box for Libvirt ；及正常啟動 VM。")]),a._v(" "),t("h2",{attrs:{id:"安裝-vagrant-軟體套件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-軟體套件"}},[a._v("#")]),a._v(" 安裝 Vagrant 軟體套件")]),a._v(" "),t("p",[a._v("以下為：Vagrant 2.2.6 安裝作業。")]),a._v(" "),t("p",[a._v("作業之程序步驟為：")]),a._v(" "),t("ul",[t("li",[a._v("先在 Client 端電腦（作業系統：macOS），透過 Web Brower 下載安裝檔案；")]),a._v(" "),t("li",[a._v("再於 Server 端電腦（作業系統：Ubuntu 18.04）進行 Vagrant 安裝。")])]),a._v(" "),t("h3",{attrs:{id:"（1）在-client-端下載安裝檔案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（1）在-client-端下載安裝檔案"}},[a._v("#")]),a._v(" （1）在 Client 端下載安裝檔案")]),a._v(" "),t("p",[a._v("在 Mac 電腦，啟動 Web Browser 後，至 Vagrant 官網下載安裝檔案（.deb）。")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("https://www.vagrantup.com/downloads.html")])])]),a._v(" "),t("h3",{attrs:{id:"（2）在-server-端進行安裝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（2）在-server-端進行安裝"}},[a._v("#")]),a._v(" （2）在 Server 端進行安裝")]),a._v(" "),t("p",[a._v("在 Client 端電腦啟動「終端機」，透過 ssh 登入伺服器。然後將先前已下載之 Vagrant 安裝檔案，複製到 Server 端的硬碟。")]),a._v(" "),t("pre",[t("code",[a._v("$ ssh web_admin@192.168.66.10\n$ cd ~/_tmp\n$ scp alanjui@192.168.66.100:~/Downloads/vagrant_2.2.6_x86_64.deb .\n")])]),a._v(" "),t("h3",{attrs:{id:"（3）透過-dpkg-安裝-vagrant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（3）透過-dpkg-安裝-vagrant"}},[a._v("#")]),a._v(" （3）透過 dpkg 安裝 Vagrant")]),a._v(" "),t("p",[a._v("使用 dpkg 執行檔案格式為 .deb 之安裝作業。")]),a._v(" "),t("pre",[t("code",[a._v("$ sudo dpkg -i vagrant_2.2.6_x86_64.deb\n選取了原先未選的套件 vagrant。\n（讀取資料庫 ... 目前共安裝了 359404 個檔案和目錄。）\n準備解開 vagrant_2.2.6_x86_64.deb ...\n解開 vagrant (1:2.2.6) 中...\n設定 vagrant (1:2.2.6) ...\n")])]),a._v(" "),t("h3",{attrs:{id:"（4）驗證安裝結果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（4）驗證安裝結果"}},[a._v("#")]),a._v(" （4）驗證安裝結果")]),a._v(" "),t("p",[a._v("執行以下指令，確認 Vagrant 已完成安裝，且可正常運作。")]),a._v(" "),t("pre",[t("code",[a._v("$ vagrant --version\nVagrant 2.2.6\n")])]),a._v(" "),t("h2",{attrs:{id:"安裝-vagrant-box-for-libvirt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-box-for-libvirt"}},[a._v("#")]),a._v(" 安裝 Vagrant Box for Libvirt")]),a._v(" "),t("p",[a._v("以下安裝之 Vagrant Box for Libvirt 為 Ubuntu 18.04.3 Desktop 版本。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ vagrant box add peru/ubuntu-18.04-desktop-amd64 --provider=libvirt\n\n$ mkdir -p ~/workspace/vagrant-libvirt/ubuntu-1804 && cd $_\n\n$ vagrant init peru/ubuntu-18.04-desktop-amd64 --box-version 20190901.01\n\n$ vagrant up\nBringing machine 'default' up with 'libvirt' provider...\n==> default: Checking if box 'peru/ubuntu-18.04-desktop-amd64' is up to date...\n==> default: Uploading base box image as volume into libvirt storage...\n==> default: Creating image (snapshot of base box volume).\n==> default: Creating domain with the following settings...\n==> default:  -- Name:              ubuntu-1804_default\n==> default:  -- Domain type:       kvm\n==> default:  -- Cpus:              1\n==> default:  -- Feature:           acpi\n==> default:  -- Feature:           apic\n==> default:  -- Feature:           pae\n==> default:  -- Memory:            2048M\n==> default:  -- Management MAC:\n==> default:  -- Loader:\n==> default:  -- Nvram:\n==> default:  -- Base box:          peru/ubuntu-18.04-desktop-amd64\n==> default:  -- Storage pool:      default\n==> default:  -- Image:             /var/lib/libvirt/images/ubuntu-1804_default.img (50G)\n==> default:  -- Volume Cache:      default\n==> default:  -- Kernel:\n==> default:  -- Initrd:\n==> default:  -- Graphics Type:     spice\n==> default:  -- Graphics Port:     -1\n==> default:  -- Graphics IP:       127.0.0.1\n==> default:  -- Base box:          peru/ubuntu-18.04-desktop-amd64\n==> default:  -- Storage pool:      default\n==> default:  -- Image:             /var/lib/libvirt/images/ubuntu-1804_default.img (50G)\n==> default:  -- Volume Cache:      default\n==> default:  -- Kernel:\n==> default:  -- Initrd:\n==> default:  -- Graphics Type:     spice\n==> default:  -- Graphics Port:     -1\n==> default:  -- Graphics IP:       127.0.0.1\n==> default:  -- Graphics Password: Not defined\n==> default:  -- Video Type:        qxl\n==> default:  -- Video VRAM:        9216\n==> default:  -- Sound Type:    ich6\n==> default:  -- Keymap:            en-us\n==> default:  -- TPM Path:\n==> default:  -- INPUT:             type=mouse, bus=ps2\n==> default:  -- CHANNEL:             type=unix, mode=\n==> default:  -- CHANNEL:             target_type=virtio, target_name=org.qemu.guest_agent.0\n==> default:  -- CHANNEL:             type=spicevmc, mode=\n==> default:  -- CHANNEL:             target_type=virtio, target_name=com.redhat.spice.0\n==> default:  -- RNG device model:  random\n==> default: Creating shared folders metadata...\n==> default: Starting domain.\n==> default: Waiting for domain to get an IP address...\n==> default: Waiting for SSH to become available...\n    default:\n    default: Vagrant insecure key detected. Vagrant will automatically replace\n    default: this with a newly generated keypair for better security.\n    default:\n    default: Inserting generated public key within guest...\n    default: Removing insecure key from the guest if it's present...\n    default: Key inserted! Disconnecting and reconnecting using new SSH key...\n==> default: Configuring and enabling network interfaces...\n\n$ vagrant status\nCurrent machine states:\n\ndefault                   running (libvirt)\n\nThe Libvirt domain is running. To stop this machine, you can run\n`vagrant halt`. To destroy the machine, you can run `vagrant destroy`. \n\n$ vagrant ssh\nWelcome to Ubuntu 18.04.3 LTS (GNU/Linux 4.15.0-58-generic x86_64)\n\n    * Documentation:  https://help.ubuntu.com\n    * Management:     https://landscape.canonical.com\n    * Support:        https://ubuntu.com/advantage\n\n\n    * Canonical Livepatch is available for installation.\n    - Reduce system reboots and improve kernel security. Activate at:\n        https://ubuntu.com/livepatch\n\n0 packages can be updated.\n0 updates are security updates.\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br"),t("span",{staticClass:"line-number"},[a._v("64")]),t("br"),t("span",{staticClass:"line-number"},[a._v("65")]),t("br"),t("span",{staticClass:"line-number"},[a._v("66")]),t("br"),t("span",{staticClass:"line-number"},[a._v("67")]),t("br"),t("span",{staticClass:"line-number"},[a._v("68")]),t("br"),t("span",{staticClass:"line-number"},[a._v("69")]),t("br"),t("span",{staticClass:"line-number"},[a._v("70")]),t("br"),t("span",{staticClass:"line-number"},[a._v("71")]),t("br"),t("span",{staticClass:"line-number"},[a._v("72")]),t("br"),t("span",{staticClass:"line-number"},[a._v("73")]),t("br"),t("span",{staticClass:"line-number"},[a._v("74")]),t("br"),t("span",{staticClass:"line-number"},[a._v("75")]),t("br"),t("span",{staticClass:"line-number"},[a._v("76")]),t("br"),t("span",{staticClass:"line-number"},[a._v("77")]),t("br"),t("span",{staticClass:"line-number"},[a._v("78")]),t("br"),t("span",{staticClass:"line-number"},[a._v("79")]),t("br"),t("span",{staticClass:"line-number"},[a._v("80")]),t("br"),t("span",{staticClass:"line-number"},[a._v("81")]),t("br"),t("span",{staticClass:"line-number"},[a._v("82")]),t("br"),t("span",{staticClass:"line-number"},[a._v("83")]),t("br"),t("span",{staticClass:"line-number"},[a._v("84")]),t("br"),t("span",{staticClass:"line-number"},[a._v("85")]),t("br"),t("span",{staticClass:"line-number"},[a._v("86")]),t("br"),t("span",{staticClass:"line-number"},[a._v("87")]),t("br")])]),t("h2",{attrs:{id:"參考文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#參考文件"}},[a._v("#")]),a._v(" 參考文件")]),a._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.linuxtechi.com/install-configure-kvm-ubuntu-18-04-server/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[a._v("How to Install and Configure KVM on Ubuntu 18.04 LTS Server")]),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://docs.cumulusnetworks.com/cumulus-vx/Development-Environments/Vagrant-and-Libvirt-with-KVM-or-QEMU/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[a._v("Vagrant and Libvirt with KVM or QEMU")]),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://computingforgeeks.com/using-vagrant-with-libvirt-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[a._v("How to Use Vagrant with Libvirt on Linux")]),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);n.default=s.exports}}]);