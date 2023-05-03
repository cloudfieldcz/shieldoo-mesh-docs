---
layout: default
title: Architecture
parent: Admin
nav_order: 5
permalink: /architecture/
---

# Architecture
Shieldoo's network architecture is built upon an open-source piece of technology called [Nebula](https://github.com/slackhq/nebula) (by [Slack](https://github.com/slackhq)).

To learn how Nebula works, use the following resources:
- [Nebula Docs](https://nebula.defined.net/docs/)  
Official Nebula documentation explaining the core concepts and features in technical detail.
- [What Is Nebula and How Does Work?](https://www.shieldoo.io/blogs/what-is-nebula-and-how-it-works)  
A blog post done by Shieldoo explains Nebula's value, such as its speed, simplicity and security.

The Shieldoo web application allows you to interact with the network architecture using the following features:
- [System Settings](/architecture/#system-settings)
- [Telemetry and Security Logs](/architecture/#telemetry-and-security-logs)

## System Settings

System Settings allows you to configure the network architecture of your Shieldoo Secure Network.

![](../../images/Architecture01.gif)

1. Log in to your organization's Shieldoo Secure Network web application.
2. Enable __Expert Mode__
  - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
3. Go to the __Settings & Logs__ \| __System Settings__ section.
4. It allows you to do the following:
  - Configure the [__CIDR__](https://www.rfc-editor.org/rfc/rfc4632) of your Shieldoo Secure Network.
  - Configure the [__Identity Integration__](/identity_integration/).
  - Configure the [__API Integration (CLI)__](/api_integration_cli/).
  - See the list of [__Lighthouses__](/architecture/#lighthouses) that exist in your Shieldoo Secure Network.

{: .warning}
> Changing the CIDR of your Shieldoo Secure Network causes all access certificates and IP addresses of nodes (servers and clients) to be regenerated.
> Only do this if you fully understand the implications.

### Lighthouses
In a Nebula network, a lighthouse is an essential component. It is a public host that helps network nodes (users and servers) discover routes to one another.

A lighthouse tracks network nodes, directing their traffic. When two nodes want to communicate with each other, a lighthouse finds the fastest route for them, allowing them to communicate directly. There is no central server creating traffic bottlenecks as with traditional VPN solutions.

{: .note }
> Shieldoo automatically deploys lighthouses for you.

## Telemetry and Security Logs

Telemetry and Security Logs can provide a wealth of information to help you monitor, troubleshoot, and secure your Shieldoo Secure Network.

![](../../images/Architecture02.gif)

1. Log in to your organization's Shieldoo Secure Network web application.
2. Enable __Expert Mode__
  - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
3. Go to the __Settings & Logs__ \| __Telemetry Logs__ or __Security Logs__ section.

<!--ADD NOTE: In Shieldoo Secure Network, it can go back up to 3 months in telemetry and security logs.-->