---
title: 自用服务器脚本大全：一键测评、工具与部署指南
date: 2026-07-01 21:00:00
updated: 2026-07-01 21:00:00
description: 常用 VPS 测评、工具安装、服务部署和 DD 重装脚本备忘。
keywords: VPS,一键脚本,测评,服务器脚本,DD重装
aside: true
toc: true
top_img: false
---

## 自用常用脚本汇总

主要是 **自用备忘**，不要当成推荐表单，使用后果自负！

```shell
apt update && apt install -y sudo curl unzip
```

---

## 测评类

### [IP质量体检脚本](https://github.com/xykt/IPQuality)

```shell
bash <(curl -Ls IP.Check.Place)
```

### [VPS融合怪服务器测评脚本](https://github.com/spiritLHLS/ecs)

```shell
curl -L https://github.com/spiritLHLS/ecs/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh -m 1
```

### [检测VPS内存是否超售的一键脚本](https://github.com/uselibrary/memoryCheck)

```shell
curl https://raw.githubusercontent.com/uselibrary/memoryCheck/main/memoryCheck.sh | bash
```

---

## 工具类

### [vps一键脚本工具](https://github.com/eooce/ssh_tool)

```shell
bash <(curl -fsSL ssh_tool.eooce.com)
```

### [gost安装脚本](https://github.com/go-gost/gost)

```shell
bash <(curl -fsSL https://github.com/go-gost/gost/raw/master/install.sh) --install
```

---

## 部署类

### [xeefei/3x-ui](https://github.com/xeefei/3x-ui)

```shell
bash <(curl -Ls https://raw.githubusercontent.com/xeefei/3x-ui/master/install.sh)
```

### [甬哥Sing-box精装桶](https://github.com/yonggekkk/sing-box_hysteria2_tuic_argo_reality)

```shell
bash <(curl -Ls https://gitlab.com/rwkgyg/sing-box-yg/raw/main/sb.sh)
```

---

## DD 重装

### [一键脚本](https://github.com/bin456789/reinstall)

```shell
curl -O https://raw.githubusercontent.com/bin456789/reinstall/main/reinstall.sh && bash reinstall.sh
```

### 功能: **安装 Linux**

- 不输入版本号，则安装最新版
- 不含 boot 分区（Fedora 例外），不含 swap 分区，最大化利用磁盘空间
- 在虚拟机上，会自动安装官方精简内核

> 安装 Debian / Kali 时，x86 可通过后台 VNC 查看安装进度，ARM 可通过串行控制台查看安装进度。
>
> 安装其它系统时，可通过多种方式（SSH、HTTP 80 端口、后台 VNC、串行控制台）查看安装进度。

```bash
bash reinstall.sh centos   7|9  (9 为 stream 版本)
                  oracle   7|8|9
                  alma     8|9
                  rocky    8|9
                  fedora   39|40
                  debian   10|11|12
                  ubuntu   20.04|22.04|24.04
                  alpine   3.17|3.18|3.19|3.20
                  opensuse 15.5|15.6|tumbleweed
                  kali
                  arch
                  gentoo
```
