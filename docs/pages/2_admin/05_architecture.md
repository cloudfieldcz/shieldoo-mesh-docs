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
Official Nebula documentation, explaining the core concepts and features in technical detail.
- [What Is Nebula and How It Works?](https://www.shieldoo.io/blogs/what-is-nebula-and-how-it-works)  
A blog post done by Shieldoo, explaining Nebula's value, such as its speed, simplicity and security.

The Shieldoo web application allows you to interact with the network architecture using the following features:
- [System Settings](/architecture/#system-configuration)
- [Telemetry and Security Logs](/architecture/#system-logs)

## System Settings

1. Log in to your organization's Shieldoo Secure Network web application and enable **Expert Mode**
2. Go to the **Setting & Logs** | **System Configuration** section.![](../../images/Architecture01.gif)
3. It allows you to do the following:
  - Configure the [**CIDR**](https://www.rfc-editor.org/rfc/rfc4632) of your Shieldoo Secure Network.
  - See the list of [**Lighthouses**](/architecture/#lighthouses) that exist in your Shieldoo Secure Network.
  

{: .warning}
> Changing the CIDR of your Shieldoo Secure Network causes all access certificates and IP addresses of nodes (servers and clients) to be regenerated.
> Avoid doing this unless you fully understand the implications.

### Lighthouses
In a Nebula network, a lighthouse is an important component. It is a public host that helps network nodes (users and servers) discover routes to one another.

A lighthouse tracks network nodes, directing their traffic. When two nodes want to communicate with each other, a lighthouse finds the fastest route for them, allowing them to communicate directly. There is no central server creating traffic bottlenecks as with traditional VPN solutions.

{: .note }
> Shieldoo automatically deploys lighthouses for you.

## Telemetry and Security Logs
<!---Telemetry Logs, Security Logs-->
