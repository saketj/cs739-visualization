var MEMORY = {
	"topic": "MEMORY",
	"nodes": [
		{
			"id": 1,
			"label": "Schroeder '09",
			"importance": 40,
			"paper-title": "Schroeder B, Pinheiro E, Weber WD. DRAM errors in the wild: a large-scale field study. InACM SIGMETRICS Performance Evaluation Review 2009 Jun 15 (Vol. 37, No. 1, pp. 193-204). ACM.",
			"download-link": "https://www.cs.toronto.edu/~bianca/papers/sigmetrics09.pdf",
			"paper-highlights": "<ul><li>System Overview<ul><li>Google's Fleet (10,000s of machines)</li><li>Timeframe: Jan 2006 to June 2008</li><li>Memory Technologies: DDR1, DDR2, FBDIMM</li><li>Replacement Policy: On Uncorrectable Error</li></ul></li><li>Uncorrectable Error Rate: .05% to .39% per DIMM per year</li><li>For all platforms, top 20% of DIMMs with errors made up over 94% of all observed errors</li><li>The difference in ECC used is suspected to be a contributor to difference in uncorrectable error rates. (SECDED vs Chipkill)<ul><li>Note, Platform F's increased rate is unexplained. See Table 1.</li></ul></li><li>Correlation is demonstrated between correctable errors and the probability of experiencing an uncorrectable error in the same month. See Figure 4.</li><li>There is a significantly lower correlation between errors in the same DIMM and errors in different DIMMs.</li><li>Chip size does not play a dominant role in influencing both correctable and uncorrectable errors.</li><li>Temperature is not an influential factor for error rates. See Figure 7.</li><li>Utilization and Age have strong correlation with error rates</li></ul>",
			"paper-observations": "The first large scale study in this area. It would be interesting to reevaluate this work using faults as the metric."
		},
		{
			"id": 2,
			"label": "Li '10",
			"importance": 40,
			"paper-title": "Li X, Huang MC, Shen K, Chu L. A realistic evaluation of memory hardware errors and software system susceptibility. InProc. USENIX Annual Technical Conference (ATC’10) 2010 Jun 23 (pp. 75-88).",
			"download-link": "https://www.cs.rochester.edu/~kshen/papers/usenix2010-li.pdf",
			"paper-highlights": "<ul><li>System Overview<ul><li>212 Prod Machines (Ask.com), 20 Univ. of Rochester desktops, 70 Wide-Area Planet Lab Machines</li><li>Timeframe: Nov 30, 2006 to Sep 11, 2007</li><li>Memory Technologies: Prod Machines - 4GB DDR2 SDRAM, protection unspecified</li><li>Replacement Policy: not provided</li><li>Limitation: Can only track 2 errors at a time. Data is collected hourly.</li></ul></li><li>First study to be able to categorize errors as logs contained specific addresses. (ie. Single cell, Row/Column or Chip)</li><li>In the first 2 months, they observed 11 machines with errors. Then, a gap for 6 months. Finally 1 more machine in the last month.</li><li>History is used to determine if a fault is transient or not.</li><li>Used Monte Carlo simulation based on collected data to evaluate different ECC algorithms.</li><li>Created a novel memory access tracking technique combining hardware watchpoints with course-grained memory protection.</li><li>Demonstrated the impact of non-transient faults on software using the aforementioned tracker.</li></ul>",
			"paper-observations": "Even in a cluster as small as 300 machines, we are seeing a number of errors manifest. It should be noted that these systems use DDR2, which they mention is capable of Chipkill, but neglect to say which one is operated."
		},
		{
			"id": 3,
			"label": "Hwang '12",
			"importance": 40,
			"paper-title": "Hwang AA, Stefanovici IA, Schroeder B. Cosmic rays don't strike twice: understanding the nature of DRAM errors and the implications for system design. InACM SIGPLAN Notices 2012 Mar 3 (Vol. 47, No. 4, pp. 111-122). ACM.",
			"download-link": "http://www.cs.toronto.edu/~bianca/papers/ASPLOS2012.pdf",
			"paper-highlights": "<ul><li>System Overview<ul><li>Lawrence Livermore (Blue Gene/L), Argonne NL (Blue Gene/P Successor), SciNet, Google (20,000)</li><li>Timeframe:BG/L (214 days) BG/P (583 days) SciNet (211 days) Google (155 days)</li><li>Memory Technologies: DDR1, DDR2, FBDIMM</li><li>Replacement Policy: not provided</li><li>Limitations: Many depending on system. See Section 2.1</li></ul></li><li>BG/P saw 1.34% of nodes requiring chipkill.</li><li>Multi-bit errors were not rare events (22.08% of errors in BG/P and 2.07% in BG/L)</li><li>For all systems, 5% of error nodes accounted for &gt; 95% of all errors.</li><li>Correlation of errors demonstrates that hardware errors are the dominant error mechanism. Reaffirms the findings of Li et al. in 2010.</li><li>There is not a large difference between systems with scrubbers and without. Therefore, a new class, intermittent errors, arises.</li><li>They find that by retiring a small fraction of pages (~10%), upto 90% of errors can be avoided.</li><li>Based on the Blue Gene data, page retirement could eliminate more than 90% of errors by retiring 10% of pages with errors</li></ul>",
			"paper-observations": "As later papers point out, errors are not a great measure of system health. I would say the main issue would be quantifying the access pattern against the actual fault count inside a DIMM. Maybe a better replacement scheme would be against the number of faults and not errors as later works would do."
		},
		{
			"id": 4,
			"label": "Sridharan '12",
			"importance": 40,
			"paper-title": "Sridharan V, Liberty D. A study of DRAM failures in the field. InProceedings of the International Conference on High Performance Computing, Networking, Storage and Analysis 2012 Nov 10 (p. 76). IEEE Computer Society Press.",
			"download-link": "http://dl.acm.org/citation.cfm?id=2389100",
			"paper-highlights": "<ul><li>System Overview<ul><li>Oak Ridge NL (18,688 2-socket nodes)</li><li>Timeframe: Nov 2009 to Oct 2010 (2nd year of prod)</li><li>Memory Technologies: DDR2 w/ Single Symbol Correct</li><li>Replacement Policy: Replaced DIMMs after first uncorrectable error.</li><li>Limitations: x86 MCA registers are polled only every few seconds.</li></ul></li><li>Methological difference from Schroeder: Error Rates vs Fault Rates</li><ul><li>Fault: Is the deviation of DRAM from its specified operation</li><li>A permenant fault may result in numerous errors while counting as only 1 fault.</li></ul><li>Observed that 2 DRAM devices will experience more than one single fault a year vs &gt; 2000 for a single fault.</li><li>Failure rate is a better assessmentfor population health as mentioned by the methodological difference.</li><li>Reaffirms previous studies that DRAM failures are dominated by permanent faults.</li><li>Their data suggests that (39.6%) multi-bit faults are a common failure mode, concluding that it seems likely the faiure is in the shared circuitry.</li><li>They determine that DRAM failure modes are varied and depend on internal DRAM organization. Implying vendor does matter in constrast to data found by Schroeder et al. in 2009.</li><li>&gt; 83% of nodes with uncorrected errors first experienced corrected errors from an existing fault.</li><li>Regarding retirement policies, retiring up to 6.25% of a node's memory only reduces the uncorrected error rate by 8%. This suggestion highlights the difference in methodologies with Schroeder.</li></ul>",
			"paper-observations": "Their hypothesis that row and column faults are cuased by failures in shared circuitry is something that could be explored by testing the DIMMs after replacement. If it is indeed the case, then it would be wise to invest more effort to understanding the issues here."
		},
		{
			"id": 5,
			"label": "Martino '14",
			"importance": 40,
			"paper-title": "Di Martino C, Kalbarczyk Z, Iyer RK, Baccanico F, Fullop J, Kramer W. Lessons learned from the analysis of system failures at petascale: The case of blue waters. In2014 44th Annual IEEE/IFIP International Conference on Dependable Systems and Networks 2014 Jun 23 (pp. 610-621). IEEE.",
			"download-link": "http://www.ncsa.illinois.edu/People/jfullop/papers/fullop_LLFASF.pdf",
			"paper-hightlights": "<ul><li>System Overview<ul><li>Blue Waters (Urbana-Champaign)</li><li>Timeframe: Mar 1, 2013 to Nov 17, 2013</li><li>Memory Technologies: DDR3 w/ x8 chipkill on compute nodes and x4 on service nodes</li><li>Replacement Policy: Replaced DIMM after rate of corrected errors &gt; threshold</li></ul></li><li>Chipkill was effective in correcting 99.97% of memory errors.</li><ul><li>70.07% of errors were single bit and 29.98% of errors were 2-8 consecutive bits.</li><li>1% of memory errors involved 4-8 bits and would therefore be uncorrectable on service nodes</li><li>28 of 1,544,398 errors were uncorrectable.</li></ul><li>0.002% of errors were uncorrectable whihc is down from 1.29% from Schroeder et al. in 2009.</li><ul><li>Blue Waters uses chipkill x8 vs x4 of Schroeder's work.</li><li>Note this study is on modules for DDR3 vs DDR1/2</li></ul><li>92% of machine checks were generated by 19% of nodes.</li><li>GPUs may be a new focus as they incur an error rate 2 orders of magnitude greater due to only using SEC codes.</li></ul>",
			"paper-observations": "It's startling that we are able to correct all but 14 errors in over 1 million logged errors. This may mean the next focus is to create a similar protection mechanism to chipkill for future generations of memory. Additionally, GPUs may be the next frontier for computation heavy tasks, so we should invest in protection for them as well as they clearly observe fault rates an order of magnitude greater."
		},
		{
			"id": 6,
			"label": "Sridharan '15",
			"importance": 40,
			"paper-title": "Sridharan V, DeBardeleben N, Blanchard S, Ferreira KB, Stearley J, Shalf J, Gurumurthi S. Memory errors in modern systems: The good, the bad, and the ugly. InACM SIGPLAN Notices 2015 Mar 14 (Vol. 50, No. 4, pp. 297-310). ACM.",
			"download-link": "https://www.cs.virginia.edu/~gurumurthi/papers/asplos15.pdf",
			"paper-highlights": "<ul><li>System Overview<ul><li>Lawrence Berkeley Labs (Hopper) and Los Alamos (Cielo)</li><li>Timeframe: Apr 2011 to Jan 2013 (Hopper), July 2011 to Nov 2012 (Cielo)</li><li>Memory Technologies: DDR3 - Chipkill correct (Hopper), Chipkill detect (Cielo)</li><li>Replacement Policy: Replaced DIMMs after first uncorrectable error.</li><li>Limitations: x86 MCA registers are polled only every few seconds.</li></ul></li><li>Findings similar to Sridharan and Liberty in 2012 on Jaguar (ORNL)<ul><li>Observed that fewer than 2 DRAM devices will suffer multiple faults within observation window</li><li>DRAM vendor is an important consideration for system reliability</li><ul><li>This may mean that the vendor chip design matters more so than the actual vendor</li></ul><li>SEC-DED is unsuitable for modern DRAM subsystems showing potential error rates as often as 0.8 days for a vendor</li></ul></li><li>Differences in altitude (Hopper at 43 ft and Cielo at 7300 ft) show noticeable increase in particle induced transient errors</li><li>Interestingly, a new fault mode called row-hammer (DRAM disturbance) faults were found after creation of the system.</li><li>DDR3 introduced parity checks to the command and address buses</li><ul><li>The rate of command/address parity errors was 72% of the rate of uncorrected ECC errors. See Figure 11.</li></ul><li>Fallacies in Measuring System Health</li><ul><li>Error Rates are heavily determined by system software and workload making it a flawed measure of hardware reliability</li><li>MCA registers are limited in storing 1 error at a time and require polling by software, thus may be discarding errors</li><li>Errors overemphasize the effefcts of permanent faults which appear to be the primary concern as of now</li></ul></ul>",
			"paper-observations": "This paper unfortunately doesn't clearly present numbers on the correlation between uncorrected errors with prior corrected errors. It would be interesting to see the distribution of DIMMs being replaced and the types of faults they experienced. Also given Martino '14's result of such few uncorrected errors in a 9 month span for 1.5 PB of memory, should uncorrected errors become the new standard as clearly chipkill is effective."
		},
		{
			"id": 7,
			"label": "Sridharan '13",
			"importance": 40,
			"paper-title": "Sridharan V, Stearley J, DeBardeleben N, Blanchard S, Gurumurthi S. Feng shui of supercomputer memory positional effects in DRAM and SRAM faults. In2013 SC-International Conference for High Performance Computing, Networking, Storage and Analysis (SC) 2013 Nov 17 (pp. 1-11). IEEE.",
			"download-link": "https://www.cs.virginia.edu/~gurumurthi/papers/SC13.pdf",
			"paper-highlights": "<ul><li>System - Cielo (Los Alamos NL), Jaguar (Oak Ridge NL)<ul><li>Dataset - mid 2012 to early 2013 (Cielo), late 2009 to late 2010 (Jaguar)</li></ul></li><li>Vendors showed significant differences in rate of faults</li><li>Faults are the appropriate metric to examine aging effects</li><li>Composition of faults transitions from permanent to transient (most likely due to the removal of faulty DIMMs)</li></ul>",
			"paper-observations": "It is important to note the difference in DDR2 and DDR3 as DDR3 with Chipkill has the ability to correct many more errors."
		}
	],
	"edges": [
		{
			"from": 1,
			"to": 2,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 1,
			"to": 3,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 1,
			"to": 4,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 1,
			"to": 5,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 1,
			"to": 7,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 2,
			"to": 3,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 2,
			"to": 4,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 2,
			"to": 6,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 2,
			"to": 7,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 3,
			"to": 4,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 3,
			"to": 6,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 3,
			"to": 7,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 4,
			"to": 6,
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"from": 4,
			"to": 7,
			"paper-highlights": "",
			"paper-observations": ""
		}
	],
	"timeline": [
		{
			"title": "Schroeder '09",
			"publication": "Published in SIGMETRICS '09",
			"description": "First large scale study of DRAM errors using Google's data centers. <br> <a href='https://www.cs.toronto.edu/~bianca/papers/sigmetrics09.pdf' target='_blank'><img src='http://i.imgur.com/3RCMbEL.png' height='90%' width='90%'></a>",
			"icon": "fa-google",
			"impact": "high"
		},
		{
			"title": "Li '10",
			"publication": "Published in USENIXATC '10",
			"description": "First study to look at addresses and consequently error patterns. Specifically, they were able to categorize errors and aggregate errors under single faults. <br> <a href='https://www.cs.rochester.edu/~kshen/papers/usenix2010-li.pdf' target='_blank'><img src='http://i.imgur.com/H4t3qj3.png' height='90%' width='90%'></a>",
			"icon": "fa-info-circle",
			"impact": "medium"
		},
		{
			"title": "Sridharan '12",
			"publication": "Published in SC '12",
			"description": "Proposed that faults are the proper mechanism to assess system health contrary to Schroeder et al.'s earlier work.",
			"icon": "fa-database",
			"impact": "high"
		},
		{
			"title": "Sridharan '13",
			"publication": "Published in SC '13",
			"description": "Solidified the idea fault rates vary significantly per vendor. <br> <a href='https://www.cs.virginia.edu/~gurumurthi/papers/SC13.pdf' target='_blank'><img src='http://i.imgur.com/25QFcRb.png' height='90%' width='90%'></a>",
			"icon": "fa-bar-chart",
			"impact": "low"
		},
		{
			"title": "Martino '14",
			"publication": "Published in DSN '14",
			"description": "Demonstrated the effectiveness of x8 Chipkill as a memory correction technology. <br> <a href='http://dl.acm.org/citation.cfm?id=2671853.2672356' target='_blank'><img src='http://i.imgur.com/XYpQnu3.png' height='90%' width='90%'></a>",
			"icon": "fa-database",
			"impact": "medium"
		},
		{
			"title": "Sridharan '15",
			"publication": "Published in ASPLOS '15",
			"description": "Described points of contention in methodologies between research groups as well as validated previous conclusions with newer datasets.",
			"icon": "fa-refresh",
			"impact": "high"
		}
	]
};