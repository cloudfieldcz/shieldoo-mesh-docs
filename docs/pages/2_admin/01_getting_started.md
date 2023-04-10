---
layout: default
title: Getting Started
parent: Admin
nav_order: 1
permalink: /admin_getting_started/
---

# Getting Started
This chapter introduces the concepts important for the administrators of your Shieldoo Secure Network.

## Administration Modes
Shieldoo Secure Network provides administrators with the following configuration modes:
- __Admin__ - Allows you to quickly set up your network without configuring any traffic restrictions. By default, all network nodes (users or server) can access each other.
- __Admin | Expert__ - Allows advanced users to secure the network by establishing rules for filtering incoming and outgoing traffic passing between the network and its nodes (users and servers). Learn about how you can enable Expert Mode, see in the [Access Management](/access_management/) chapter.

## Users
Users in a Shieldoo Secure Network are clients that can connect to servers.

To learn how to invite users to your Shieldoo Secure Network, see the [Users](/users/) chapter.

## Servers
Servers in a Shieldoo Secure Network are devices that users or other servers can connect to.

- __Attached Services__ are devices that run on the local network of a server (configured in Shieldoo), but on which Shieldoo cannot be installed (e.g. a printer). Shieldoo allows you to connect to such services directly without having to connect to their servers first.

To learn how to install servers and attached services in your Shieldoo Secure Network, see the [Servers](/servers/) chapter.

## Access Management Features
The following features allow you to secure your Shieldoo Secure Network:
- __Groups__ - A group is a mechanism that maps specific firewall rules to specific nodes (users and servers).
- __Firewalls__ - A firewall configures rules that determine which traffic can pass between the network and its nodes (users and servers). 
- __Access Cards__ - An access card maps firewall rules and groups to specific nodes (servers and users).  
In other words, it determines what nodes can access within the network.

To learn more about the listed features, see the [Access Management](/access_management/#groups) chapter.
<!---Listener-->