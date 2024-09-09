---
title: 'Install & Manage NodeJs on Linux and Mac (With NVM)'
slug: '/install-and-manage-node-with-nvm-on-linux-and-mac'
author: [Yuvaraj V]
tags: [nodejs, nvm, javascript]
featuredImage: ../images/nodejs.png
date: '2024-09-09'
---


[NodeJs](https://nodejs.org/en) is one of the most popular open-source JavaScript runtimes that allows developers to write servers and backend programs, CLI tools, and more, all using JavaScript.

In this guide, we will cover how to install, run, and manage multiple versions of Node.js simultaneously on Linux and Mac systems using [NVM](https://github.com/nvm-sh/nvm). This process is applicable to most Unix-based systems, though it has been tested specifically with Ubuntu, Fedora, and Mac systems by me.

## Step 1: Install NVM
Open your terminal and run one of the following commands to install NVM on your Linux or Mac machine:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

## Step 2: Verify NVM Installation
To verify that NVM has been installed and is available for use, run:

```bash
command -v nvm
```

**Note**: 
 On Linux, if you receive a `nvm: command not found` error or see no output after running `command -v nvm`, close your current terminal, open a new terminal, or restart your system, and try verifying again.


## Step 3: Installing Nodejs
You can use `nvm install node` to install the latest version of Node.js. To install a specific version, use `nvm install <version>`. For example, to install Node.js version 20, use the following command:

```bash
nvm install 20
```

Verify the installed Node.js version with:

```bash
node -v
```
This command will print the currently active version of Node.js on your system.


## Step 4: Listing Available / Installed Node.js Versions
To list all available, installed, and default versions of Node.js on your system, use:

```bash
nvm ls
```

## Step 5: Switching Between Different Node.js Versions
To switch between different versions of Node.js available on your system, use:
`nvm use <version>`.

For example, to switch to Node.js version 20 in your current terminal session, run:
```bash
nvm use 20
```

For more details on using NVM, refer to the [Official NVM repo](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage). You can also find additional tutorials and videos on our [YouTube channel](https://www.youtube.com/c/KodeMonk).

### Here is a YouTube video demonstrating how to install Node.js using NVM:
`youtube: https://www.youtube.com/watch?v=yfWfh2ezUuE&list=PLUOHvKUkDFeEuUCLraDGtccDVqqNAahVZ`
