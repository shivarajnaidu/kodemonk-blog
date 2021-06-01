---
title: 'How to install dotnet core 5.0 in Ubuntu 20.04'
slug: '/installing-dotnet-core-5-on-ubuntu-20-04'
author: [Yuvaraj V]
tags: [dotnet, dotnet-core, dotnet-core-5.0, linux, ubuntu]
featuredImage: ../images/NET_Core_Logo.png
date: '2021-05-30'
---

***.Net Core*** is an opensource cross platform framework used to build range of applications. essentially used to build backend and desktop applications.
Today we are going to see how to install .Net Core 5.0 on ubuntu 20.04.

## Step 1: 
Before we install dotnet, run the following commands to add the Microsoft package signing key to your list of trusted keys and add the package repository.

```bash
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```

## Step 2:
Update package list / repositories with `sudo apt update`

```bash
sudo apt install -y apt-transport-https && sudo apt update
```

## Step 3 (Install the SDK / runtime):

The .NET SDK allows you to develop apps with .NET. If you install the .NET SDK, you don't need to install the corresponding runtime. To install the .NET SDK, run the following commands:

```bash
sudo apt install -y dotnet-sdk-5.0
```

or if you just want to run apps install .NET runtime alone.
The ASP.NET Core Runtime allows you to run apps that were made with .NET that didn't provide the runtime. The following commands install the ASP.NET Core Runtime, which is the most compatible runtime for .NET. In your terminal, run the following commands:

```bash
sudo apt install -y aspnetcore-runtime-5.0
```
 The above command will install *ASP.NET Core Runtime*. if you just need .NET runtime use the below command.

 ```bash
 sudo apt install -y dotnet-runtime-5.0
 ```

## Step 5 (Check the installation):
Use the following commands to verify the installtion of .NET Core 5.0

```bash
dotnet --list-sdks && dotnet --list-runtimes
```
The above command will print list of installed .NET sdks and runtimes


## Create your first application
Use the following command to create new .NET core application.
```bash
dotnet new console --output hello-world
```
Run the application with `dotnet run --project hello-world`.
You will see `Hello World!` output in your console.