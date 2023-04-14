---
layout: default
title: Introduction
nav_order: 1
description: "Introduction to Shieldoo Secure Network."
permalink: /
---

# Shieldoo Secure Network

## What does it do?

Shieldoo™️ connects computers and mobile devices securely in just a few clicks, wherever they are.

### Connect without public IP

__Shieldoo™️ connects computers and mobile devices securely in just a few clicks, wherever they are.__
<!--Shieldoo™️ -> Shieldoo Secure Network?-->
- Knowing its IP address
- Configuring it to receive requests
- Ensuring that it’s stable and public (which your internet provider can do as an additional service)
- Protecting it from unauthorized access

The approach is complex and raises four key issues:
- The task is complex and requires high-level expertise—you’d need to know what you’re doing.
- Making your computer internet-accessible makes your network vulnerable.
- Setting up a public static id takes time.
- You can’t physically move the server, as you’d rely on your internet provider.

With Shieldoo™️, you can avoid these issues. You won’t need to go through the tedious standard process.
<!--Shieldoo™️ -> Shieldoo Secure Network?--> 

Just install the app on your computer and connect it to the network. That’s it.

Secure, fast, simple.

_Your network has a “lighthouse” — you can imagine it as its “signpost”. When a node connects to your network, it tells this signpost where it is and opens a connection. When your device wants to connect to the server node, it asks the lighthouse where to find it and uses the opened connection._

### Single Sign-on
Log in to the Shieldoo™️ secure network using your Google or Microsoft account. Once logged in, there’d be no need to repeat the process. You won’t need additional credentials or another registration. There are also access features, such as password recovery and two-factor authentication.
<!--Shieldoo™️ -> Shieldoo Secure Network?-->

_We implemented the apis of Microsoft and Google sso for you. Your account will be associated with one of them._

### Zero trust

__Zero trust is based on a key principle: never trust any identity by default.__

The endpoints on the Shieldoo™️ secure network always require identity verification and checks for service access eligibility.
<!--Shieldoo™️ -> Shieldoo Secure Network?-->

_The request must be signed with a proper certificate when someone wants to connect to a server. The authorization is verified through the lighthouse, where the access rules are available._

### Time-limited access

Whether you need to temporarily share access privileges with your team (like when you’re on vacation) or with a consultant, you can set time-limited access rights in a few minutes.

_Access is backed by a certificate. You may set an expiry time for this certificate._

### Traffic monitoring

The Shieldoo™️ network lets the administrator check which endpoint connects where and when. While only you would have complete control, you might want to make usage statistics or share details in case of suspicious activity.
<!--Shieldoo™️ -> Shieldoo Secure Network?-->

_Connection is established using the lighthouse. Once this is done, it is possible to log an activity. Then, peer-to-peer communication will continue, and no surveillance will be available._

### Easy management

Avoid subnet or certificate hassles. Instead, we’ve built an intuitive website that lets you control your network.

_Our website is hosted on the Amazon Web Services cloud platform. Every network has its deployment, database, and completely separate universe. The universe is identified by the domain you register. You’ll _use this _URL_ to install_, inspect, or change settings. And because this is on the web, no updates will be needed. The UI is designed with the best and latest features to offer a top-notch user experience._

### Lightweight operation

You won’t need to buy a server or purchase strong cloud capacity. Your devices can communicate peer-to-peer. They interact with the network backend only for establishing connections and managing security.

_Have you heard of sdp (software-defined_ perimeter)? Essentially, it refers to how a network is not defined on the “network level” in routers but by software installed on the endpoints. Shieldoo™️ network lets the underlying network—like the internet—do its best. Plus, it drives the traffic on top of it._
<!--Shieldoo™️ -> Shieldoo Secure Network?-->

## How is it built?

### Nebula

__Our solution is based on an open-sourced technology called Nebula.__

Created at Slack technologies by Nate Brown and Ryan Huber (with the help of their colleagues), Nebula can power production networks for millions of users worldwide. In November 2019, it became available as an open-source product. Its essential functions are:

- Fastest handshakes with a high level of security
- Automatic detection of the fastest route between hosts
- Granular security control

We understand that not everyone can navigate complex security infrastructure. So we’ve put our years of experience in security and infrastructure architecture to ensure that Nebula is easy to use. It can be accessed at any time without deep technical knowledge or skills.

### AWS

__Our website is hosted on the Amazon Web Services cloud platform.__

Every network has its deployment, database, and utterly separate universe.

The universe is identified by the domain you register. You’ll also use the URL to install, inspect, or change settings. Another advantage of having this on the web is that no updates will be needed. The UI is designed with the best and latest features to offer a top-notch user experience.