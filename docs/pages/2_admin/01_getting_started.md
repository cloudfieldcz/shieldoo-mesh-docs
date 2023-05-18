---
layout: default
title: Getting Started
parent: Admin
nav_order: 1
permalink: /admin_getting_started/
---

# Getting Started
This chapter introduces the concepts essential for your Shieldoo Secure Network administrators (admins).

## Admin Modes
{: .d-inline-block }
[__ADMIN__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-purple }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }

Shieldoo Secure Network provides administrators with the following configuration modes:
1.  __Admin__ - Allows you to quickly set up your network without configuring any traffic restrictions. All network nodes (users or servers) can access each other by default.
2. __Admin__ \| __Expert__ - Allows advanced users to secure the network by establishing rules for filtering incoming and outgoing traffic passing between the network and its nodes (users and servers). See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.

## Users
Users in a Shieldoo Secure Network are clients that can connect to servers in network.

To learn how to invite users to your Shieldoo Secure Network, see the [Users](/users/) chapter.

## Servers
Servers in a Shieldoo Secure Network are devices to which users or other servers can connect.

- __Attached Services__ are devices that run on the local network of a server (configured in Shieldoo) but on which Shieldoo cannot be installed (e.g. a printer). Shieldoo lets you directly connect to such services without connecting to their servers.

To learn how to install servers and attached services in your Shieldoo Secure Network, see the [Servers](/servers/) chapter.

## Access Management Features
The following features allow you to secure your Shieldoo Secure Network:
- __Groups__ - A group is a mechanism that maps specific firewall rules to specific nodes (users and servers).
- __Firewalls__ - A firewall configures rules that determine which traffic can pass between the network and its nodes (users and servers). 
- __Access Cards__ - An access card maps firewall rules and groups to specific nodes (servers and users).  
In other words, it determines what nodes can access the network.

See the [Access Management](/access_management/#groups) chapter to learn more about the listed features.