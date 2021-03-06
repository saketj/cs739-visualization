/*!
 * Start Bootstrap - A Survey of Modern Hardware Failures v3.3.7+1 (http://pages.cs.wisc.edu/~ssaurabh/cs739)
 * Copyright 2013-2016 Saket Saurabh
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
var NETWORK = {
	"topic": "NETWORK",
	"nodes": [
		{
			"id": 1,
			"label": "Gill'11",
			"importance": 70,
			"paper-title": "Gill, P., Jain, N., & Nagappan, N. (2011, August). Understanding network failures in data centers: measurement, analysis, and implications. In ACM SIGCOMM Computer Communication Review (Vol. 41, No. 4, pp. 350-361). ACM.",
			"download-link": "http://research.microsoft.com/en-us/um/people/navendu/papers/sigcomm11netwiser.pdf",
			"paper-highlights": "<ul><li>The first large-scale analysis of failures in a data center network</li><li>Authors seek to answer several fundamental questions: which devices/links are most unreliable, what causes failures, how do failures impact network traffic and how effective is network redundancy?</li><li>The key findings of our study are that:&nbsp;<ul><li>data center networks show high reliability</li><li>commodity switches such as ToRs and AggS are highly reliable</li><li>load balancers dominate in terms of failure occurrences with many short-lived software related faults</li><li>failures have potential to cause loss of many small packets such as keep alive messages and ACKs</li><li>network redundancy is only 40% effective in reducing the median impact of failure</li></ul></li><li>On an average, 5.2 devices and 40.8 links fail per day&nbsp;</li><li>Root cause of failures: Connectivity errors and software problems</li></ul>",
			"paper-observations": "<ul><li>Use commodity switches as they have high reliability</li><li>Improve reliability of middle boxes&nbsp;</li><li>Separate control plane from data plane</li><li>Improve the effectiveness of network redundancy</li></ul>"
		},
		{
			"id": 2,
			"label": "Potharaju'13",
			"importance": 60,
			"paper-title": "Potharaju, R., & Jain, N. (2013, October). Demystifying the dark side of the middle: a field study of middlebox failures in datacenters. In Proceedings of the 2013 conference on Internet measurement conference (pp. 9-22). ACM",
			"download-link": "http://dl.acm.org/citation.cfm?id=2504737",
			"paper-highlights": "<ul><li>Network appliances or middleboxes such as ﬁrewalls, intrusion detection and prevention systems (IDPS), load balancers, and VPNs form an integral part of datacenters and enterprise networks</li><li>One of the ﬁrst attempts to perform a large-scale empirical study of middlebox failures over two years in a service provider network comprising thousands of middleboxes across tens of datacenters</li><li>Key finidings:&nbsp;<ul><li>&nbsp;Most failures are grey dominated by connectivity errors and link ﬂaps that exhibit intermittent connectivity</li><li>&nbsp;Hardware faults and overload problems are present but they are not in majority</li><li>Middleboxes experience a variety of misconﬁgurations such as incorrect rules, VLAN misallocation and mismatched keys</li><li>&nbsp;Middlebox failover is ineﬀective in about 33% of the cases for load balancers and ﬁrewalls due to conﬁguration bugs, faulty failovers and software version mismatch</li></ul></li><li>Middlebox failures contribute to 43% high severity incidents, Lost connectivity is the most common impact</li></ul>",
			"paper-observations": "<ul><li>Commoditize middleboxes</li><li>Middlebox veriﬁcation</li><li>Detect early faulty product-line</li><li>Feasibility of making middlebox processing as a cloud service</li><li>Make the cost-metric of middlebox hardware reliability aware</li></ul>"
		},
		{
			"id": 3,
			"label": "Potharaju'13",
			"importance": 50,
			"paper-title": "Potharaju, R., & Jain, N. (2013, October). When the network crumbles: An empirical study of cloud network failures and their impact on services. In Proceedings of the 4th annual Symposium on Cloud Computing (p. 15). ACM",
			"download-link": "http://dl.acm.org/citation.cfm?id=2523638",
			"paper-highlights": "<ul><li>&nbsp;A major factor affecting service availability is reliability of the network, both inside the datacenters and wide-area links connecting them</li><li>This paper makes one of the ﬁrst attempts to characterize intra-datacenter and inter-datacenter network failures from a service perspective</li><li>Some key findings:&nbsp;<ul><li>The median number of bytes lost during failures is about 130 GB/day for ARs and 38 GB/day for AGGs while it is about 1 GB/day for ToRs.&nbsp;</li><li>&nbsp;Link ﬂapping and interface errors dominate problem root causes across all device types. (2) Other dominant causes are hardware failures, unexpected reboots and misconﬁgurations.&nbsp;</li><li>Repairs were relatively more effective for ARs and AGGs</li><li>Device failures are not memoryless i.e., they are not independent</li><li>&nbsp;All device types exhibit some amount of &ldquo;burstiness&rdquo; in their failure patterns with ToRs showing the least. After one failure, probability of subsequent failures is higher in the near time window.&nbsp;</li><li>: Fiber length has no statistically signiﬁcant correlation with the number of failures observed</li><li>Layer-2 switches exhibit high availability when about half of their port capacity is utilized (in terms of ToR count). However, the availability signiﬁcantly decreases as the ToR count gets close to the full switch capacity.</li></ul></li></ul>",
			"paper-observations": ""
		},
		{
			"id": 4,
			"label": "Bailis'14",
			"importance": 70,
			"paper-title": "Bailis, P., & Kingsbury, K. (2014). The network is reliable. Queue, 12(7), 20",
			"download-link": "http://dl.acm.org/citation.cfm?id=2655736",
			"paper-highlights": "<ul><li>Talks about the evolving debate of network reliability&nbsp;</li><li>Covers the major studies of network failures -- Microsoft and HP networks&nbsp;</li><li>Points out the google cluster's first year details and how network availability is a cause of concern&nbsp;</li><li>Talks about the decisions taken in Amazon Dynamo and Yahoo PNUTS to improve network reliability</li><li>Gives various case studies of network outages which have made it to press over the last decade&nbsp;</li><li>Concludes that cautious engineering is very important to prevent outages</li></ul>",
			"paper-observations": "<ul><li>DNS-redirection based network load balancing</li><li>Link Bundling and Wavelength Provisionin</li><li>Techniques to improve network redundancy</li><li>Repair vs. replace has been discussed</li></ul>"
		},
		{
			"id": 5,
			"label": "Turner'12",
			"importance": 70,
			"paper-title": "Turner, D., Levchenko, K., Mogul, J. C., Savage, S., & Snoeren, A. C. (2012). On failure in managed enterprise networks. HP Labs HPL-2012-101.",
			"download-link": "http://www.hpl.hp.com/techreports/2012/HPL-2012-101.pdf",
			"paper-highlights": "<ul><li>The authors have analyzed almost a year&rsquo;s worth of failure data for thousands of enterprise networks. The data includes device logs, network probes, call center tickets, and incident report</li><li>Main Contributions:&nbsp;<ul><li>low-level data sources alone are unlikely to provide a comprehensive characterization of failure as experienced by users or network managers</li><li>the principal source of high-severity unresolved problem minutes are connectivity failures that result from thirdparty ISP issues</li><li>unlike high-severity problems, they cover a far more diverse set of issues, yet the ESP can usually fix these problems without assistance from other vendors or providers</li><li>various kinds of connectivity problems typically generate customer calls. However, call volumes are not heavily concentrated in any particular category, suggesting that ESPs have sufficient monitoring capability to discover most classes of problems without customer-generated reports</li><li>With the exception of high-severity problems, that the breakdowns by problem type, source of problem, and resolution can vary tremendously between customers</li></ul></li></ul>",
			"paper-observations": ""
		},
		{
			"id": 6,
			"label": "Padmanabhan'06",
			"importance": 20,
			"paper-title": "Padmanabhan, V. N., Ramabhadran, S., Agarwal, S., & Padhye, J. (2006, December). A study of end-to-end web access failures. In Proceedings of the 2006 ACM CoNEXT conference (p. 15). ACM.",
			"download-link": "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/conext2006.pdf",
			"paper-highlights": "<ul><li>A study of end-to-end web access failures in the Internet</li><li>Study is based on failure observations during a monthlong experiment involving 134 client hosts</li><li>The median failure rate of web accesses is about 1.5%</li><li>About 34-42% of the web access failures are due to DNS problems, primarily due to the inability of the client to connect to its local DNS server</li><li>The majority of the remaining failures are due to TCP connection establishment failures</li><li>By correlating failure observations across clients and servers, we find that server-side problems are the dominant cause of TCP connection failures</li></ul>",
			"paper-observations": ""
		}
	],
	"edges": [
		{
			"from": 1,
			"to": 2,
			"edge-highlights": "<ul><li>This was an incremental study from MSR. The first paper talked about failures in data center networks and identified that it is important to improve middlebox reliabilty. The second paper talked about the middlebox failures alone and suggests ways to build a robust network from the lessons derived from both the studies.</li></ul>"
		},
		{
			"from": 1,
			"to": 3,
			"edge-highlights": "<ul><li>This was an incremental study from MSR. The first paper talked about failures in data center networks and identified that it is important to study their impact on services hosted. The second paper talked about the inter and intra data center network failures and how they affect the services.</li></ul>",
			"edge-observations": ""
		},
		{
			"from": 1,
			"to": 4,
			"edge-highlights": "<ul><li>Second paper is an informal survey of network failures from various literature and case studies. This cites the first paper, which is a work from MSR</li></ul>",
			"edge-observations": ""
		},
		{
			"from": 2,
			"to": 3,
			"edge-highlights": "This was an incremental study from MSR. The first paper talked about middlebox failures. The second paper talked about the inter and intra data center network failures and how they affect the services.",
			"edge-observations": ""
		},
		{
			"from": 5,
			"to": 1,
			"edge-highlights": "<ul><li>First paper was a study of failures in enterprise networks. The second work talks about failures in Data Center Networks. Both the studies are first of their kinds.</li></ul>",
			"edge-observations": ""
		},
		{
			"from": 5,
			"to": 4,
			"edge-highlights": "<ul><li>Second paper is an informal survey of network failures from various literature and case studies. This cites the first paper, which is a work from HP</li></ul>",
			"edge-observations": ""
		},
		{
			"from": 6,
			"to": 1,
			"edge-highlights": "<ul><li>First paper was a study of web access failures while the second one talks about the failures in data center network elements.</li></ul>",
			"edge-observations": ""
		}
	],
	"timeline": [
		{
			"title": "Padmanabhan'06",
			"publication": "Published in ACM CoNEXT conference 2006",
			"description": "This study was done at MSR, talks about failures in web accesses.",
			"icon": "fa-windows",
			"impact": "medium"
		},
		{
			"title": "Gill'11",
			"publication": "Published in SIGCOMM 2011",
			"description": "This study was done at MSR, talks about failures in data network failures",
			"icon": "fa-windows",
			"impact": "high"
		},
		{
			"title": "Turner'12",
			"publication": "Report from HP Labs",
			"description": "This study was done at HP Labs, talks about failures in enterprise managed networks.",
			"icon": "",
			"impact": "medium"
		},
		{
			"title": "Potharaju'13",
			"publication": "Published in conference on Internet measurement conference 2013",
			"description": "This study was done at MSR, talks about failures in middle boxes.",
			"icon": "fa-windows",
			"impact": "medium"
		},
		{
			"title": "Potharaju'13",
			"publication": "Published in annual Symposium on Cloud Computing 2013",
			"description": "This study was done at MSR, talks about failures inter and intra datacenter networks.",
			"icon": "fa-windows",
			"impact": "high"
		},
		{
			"title": "Bailis'14",
			"publication": "Report from UC Berkley",
			"description": "This study was done at UC Berkley. It is an informal survey of network failures.",
			"icon": "",
			"impact": "medium"
		}
	]
};