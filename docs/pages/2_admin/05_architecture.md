---
layout: default
title: Architecture
parent: Admin
nav_order: 5
permalink: /architecture/
---

# Architecture
Shieldoo's network architecture is built upon an open-source piece of technology called <a href="https://github.com/slackhq/nebula" target="blank">Nebula<a/> (by <a href="https://github.com/slackhq" target="blank">Slack<a/>).

To learn how Nebula works, use the following resources:
- <a href="https://nebula.defined.net/docs" target="blank">Nebula<a/>    
Official Nebula documentation explaining the core concepts and features in technical detail.
- <a href="https://www.shieldoo.io/blogs/what-is-nebula-and-how-it-works" target="blank">What Is Nebula and How Does Work?<a/>  
A blog post done by Shieldoo explains Nebula's value, such as its speed, simplicity and security.

The Shieldoo web application allows you to interact with the network architecture using the following features:
- [System Settings](/architecture/#system-settings)
- [Telemetry and Security Logs](/architecture/#telemetry-and-security-logs)

## System Settings
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }

System Settings allows you to configure the network architecture of your Shieldoo Secure Network.

{% include img.html src="../../images/Architecture01.gif" alt="System Settings" %}

1. Log in to your organization's Shieldoo Secure Network web application.
2. Enable __Expert Mode__
  - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
3. Go to the __Settings & Logs__ \| __System Settings__ section.
4. It allows you to do the following:
  - Configure the <a href="https://www.rfc-editor.org/rfc/rfc4632" target="blank">__CIDR__<a/> of your Shieldoo Secure Network.
  - Configure the [__Identity Integration__](/identity_integration/).
  - Configure the [__API Integration (CLI)__](/api_integration_cli/).
  - See the list of [__Lighthouses__](/architecture/#lighthouses) that exist in your Shieldoo Secure Network.
  - See the list of [__Cost Usage__](/architecture/#cost-usage).

{: .warning}
> Changing the CIDR of your Shieldoo Secure Network causes all access certificates and IP addresses of nodes (servers and clients) to be regenerated.
> Only do this if you fully understand the implications.

### Lighthouses
In a Nebula network, a lighthouse is an essential component. It is a public host that helps network nodes (users and servers) discover routes to one another.

A lighthouse tracks network nodes, directing their traffic. When two nodes want to communicate with each other, a lighthouse finds the fastest route for them, allowing them to communicate directly. There is no central server creating traffic bottlenecks as with traditional VPN solutions.

{: .note }
> Shieldoo Secure Network automatically deploys lighthouses for you.

### Cost usage
Here you can see the cost usage by month and by specific users and servers. 

{% include img.html src="../../images/Architecture02.png" alt="System Settings" %}

{: .note }
> For more price information, please visit the <a href="https://www.shieldoo.io/pricing" target="blank">__pricing section__<a/> of our website.

## Telemetry and Security Logs
{: .d-inline-block }
[__ADMIN \| EXPERT__](/admin_getting_started/#administration-modes){: style="color: white; text-decoration: none;"}
{: .label .label-green }

Telemetry and Security Logs can provide a wealth of information to help you monitor, troubleshoot, and secure your Shieldoo Secure Network.

{% include img.html src="../../images/Architecture03.gif" alt="Telemetry and Security Logs" %}

1. Log in to your organization's Shieldoo Secure Network web application.
2. Enable __Expert Mode__
  - See the [Access Management](/access_management/) chapter to learn how to enable Expert Mode.
3. Go to the __Settings & Logs__ \| __Telemetry Logs__ or __Security Logs__ section.

{: .note }
>Shieldoo Secure Network keeps telemetry and security logs for nine days as standard.