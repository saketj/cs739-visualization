var PROCESSOR = {
	"topic": "PROCESSOR",
	"nodes": [
		{
			"id": 1,
			"label": "Ziegler '96",
			"importance": 30,
			"paper-title": "Ziegler JF, Curtis HW, Muhlfeld HP, Montrose CJ, Chin B. IBM experiments in soft fails in computer electronics (1978–1994). IBM journal of research and development. 1996 Jan 1;40(1):3-18.",
			"download-link": "http://ieeexplore.ieee.org/document/5389432/",
			"paper-highlights": "<p>This historical review covers IBM experiments in evaluating radiation-induced soft fails in LSI electronics over a fifteen-year period, concentrating on major scientific and technical advances which were not previously published. This paper focuses primarily on soft fails caused at the computer chip level by two types of nuclear radiaion: (1) the decay of radioactive atoms which exist in trace amounts in all materials, and (2)&nbsp;extraterrestrial cosmic rays which bombard the earth constantly from the far depths of the galaxy.&nbsp;</p> <p>Some of the conclusions discussed in the paper are:</p> <ul> <li>The cosmic ray intensity is greatest at high terrestrial altitudes, and approaches zero under extensive shielding.</li> <li>In all tests, the observed fail rate scaled directly with the cosmic ray intensity, over a total observed change of more than 1OOOx.</li> <li>As LSI memory devices become smaller, they become more sensitive to nuclear-radiation-induced soft fails.</li> <li>The circuit types most resistant to soft errors are CMOS and n-MOS static arrays, and DRAMS with deep buried layers to prevent chargefunneling.</li> <li>The circuits most sensitive to cosmic rays are bipolar SRAMs. For recent circuits, the SER differences between various chips span more than four decades of sensitivity.</li></ul>",
			"paper-observations": "This work originated in 1978, went through several years of research to verify its magnitude, and became a significant factor in IBM’s efforts toward improved product reliability."
		},
		{
			"id": 2,
			"label": "Saggese '05",
			"importance": 50,
			"paper-title": "Saggese GP, Wang NJ, Kalbarczyk ZT, Patel SJ, Iyer RK. An experimental study of soft errors in microprocessors. IEEE micro. 2005 Nov 1;25(6):30-9.",
			"download-link": "https://www.researchgate.net/profile/Nicholas_Wang/publication/3215503_An_experimental_study_of_soft_errors_in_microprocessors/links/00b49533501e4d267d000000.pdf",
			"paper-highlights": "<p>Given that the issue of soft-errors is an emerging concern in the design of future microprocessors, the authors examine the impact of soft errors on processor failures. This study was conducted in a simulated environment&nbsp;by artifically injecting faults in two types of processors: (1) a DLX processor used in&nbsp;embedded computing&nbsp;and, (2) an alpha processor used in high-performance computing.</p> <p>Some of the conclusions discussed in the paper are:</p> <ul> <li>Future systems will be more susceptible to soft fails because of the confluence&nbsp;of device and voltage scaling and increasing system complexity.</li> <li>These soft fail errors are caused by&nbsp;energetic radiation particles, capacitive coupling, electromagnetic interference, and other sources of electrical noise.</li> <li>A significant percentage of faults originating within the processor chip is masked at the processor logic or architectural level and do not even manifest at processor pins.</li> <li>Different functional blocks of processor have different fault sensitivity. For example, flip-flops holding information about instruction pipeline are eight times more sensitive to faults than flip-flops representing address fields for memory operations.</li> <li>Sequential logic elements are more prone to faults than combinational logic blocks.</li> <li>Processor-level faults can cause following types of application-level failures: <ul> <li>Application Crash (~23%)</li> <li>Fail-silent data violations (~12%)</li> <li>Incomplete execution (~12%)</li> <li>Have no effect in about (~53%) of cases.</li> </ul> </li> <li>Soft fails in processor can cause two types of faults to manifest in processor chips: (1) Bit flips in sequential elements, and (2) Transient voltage pulses in combinational elements.</li> <li>About 53% of errors that propagate outside the processor boundaries do not impact the application's correct behavior.</li> <li>Most of the soft-fail errors can be fixed via replication, error correction code, radiation-hardened standard cells or using error-trapping latches.</li> </ul>",
			"paper-observations": "<p>Although this is a good experimental study characterizing the impact of soft-fail errors in processors, it does not present any conclusive evidence as to how often such soft-fail errors will be encountered in actual production systems.</p>"
		},
		{
			"id": 3,
			"label": "Sridharan '15",
			"importance": 40,
			"paper-title": "Sridharan V, DeBardeleben N, Blanchard S, Ferreira KB, Stearley J, Shalf J, Gurumurthi S. Memory errors in modern systems: The good, the bad, and the ugly. InACM SIGPLAN Notices 2015 Mar 14 (Vol. 50, No. 4, pp. 297-310). ACM.",
			"download-link": "https://www.cs.virginia.edu/~gurumurthi/papers/asplos15.pdf",
			"paper-highlights": "<ul><li>System Overview<ul><li>System: Cielo (Los Alamos NL), Hopper&nbsp;(Lawrence Berkeley Labs)</li><li>Timeline: Jul 2011 to Nov 2011 (Cielo), Apr 2011 to Jan 2013 (Hopper)</li><li>CPUs: AMD Opteron Processors</li></ul></li><li>SRAM faults are dominated by faults in the L2 and L3 data caches (largest structures)</li><li>Good correlation between SRAM faults in the field and measurements taken in lab settings</li><li>SRAM uncorrected errors are skewed significantly towards parity protected bits.<ul><li>Easy next step would be to extend SEC-DED ECC to SRAM</li></ul></li></ul>",
			"paper-observations": "We should evaluate the cost of adding SEC-DED to parity protected mechanisms as it seems to be the natural next step. It seems the correction of errors is the best way to move forward as well rather than preventing errors."
		},
		{
			"id": 4,
			"label": "Sridharan '13",
			"importance": 40,
			"paper-title": "Sridharan V, Stearley J, DeBardeleben N, Blanchard S, Gurumurthi S. Feng shui of supercomputer memory positional effects in DRAM and SRAM faults. In2013 SC-International Conference for High Performance Computing, Networking, Storage and Analysis (SC) 2013 Nov 17 (pp. 1-11). IEEE.",
			"download-link": "https://www.cs.virginia.edu/~gurumurthi/papers/SC13.pdf",
			"paper-highlights": "<ul><li>System Overview<ul><li>System: Cielo (Los Alamos NL), Jaguar (Oak Ridge NL)</li><li>Timeline: mid 2011 to early 2013 (Cielo), late 2009 to late 2010 (Jaguar)</li><li>CPUs: AMD Opteron Processors</li></ul></li><li>Demonstrated that Transient Faults are the dominating fault mode for processors<ul><li>Most-likely can be attributed to the difference between SRAM (latch-based) and DRAM (capacitor-based)</li></ul></li><li>The rate at which they experience the transient faults increases as the particle flux ratio increases showing altitude affects the overall fault rate of the system.</li></ul>",
			"paper-observations": "As this is the first large scale SRAM study, it would be interesting to see a manufacturer comparison at this scale for SRAM."
		},
		{
			"id": 5,
			"label": "Mukherjee '03",
			"importance": 40,
			"paper-title": "Mukherjee SS, Weaver C, Emer J, Reinhardt SK, Austin T. A systematic methodology to compute the architectural vulnerability factors for a high-performance microprocessor. InProceedings of the 36th annual IEEE/ACM International Symposium on Microarchitecture 2003 Dec 3 (p. 29). IEEE Computer Society.",
			"download-link": "http://people.csail.mit.edu/emer/papers/2003.12.micro.avf.pdf",
			"paper-highlights": "Fundamentally, latches are only susceptible to things such as cosmic radiation when they are taking on a bit. This paper presents the concept of Architectural Vulnerabiility Factors in an effort to address this and better address the FIT metric. In particular, they explore the idea that not every fault will propagate into an error as they will not always contain something they dub an Architectually Correct Execution (ACE) bit, a bit required to be correct during execution. An example of this is the branch predictor has a AVF of 0% because if it predicts wrong it is not a big deal and the wrong execution will be flushed. Thus, no error propagates to the user. The downside to this is it requires the use of simulators, performance models, or fault injection and therefore is difficult to translate this into a large scale application as the AVF is susceptible to workload.",
			"paper-observations": "While an interesting idea, we do not have the luxury of analyzing all workloads. It is also a challenge in and of itself to detect erroneous behavior from processors without incurring significant overhead."
		}
	],
	"edges": [
		{
			"from": 4,
			"to": 3,
			"paper-highlights": "",
			"paper-observations": ""
		}
	],
	"timeline": [
		{
			"title": "Ziegler '96",
			"publication": "Published in IBM Journal 1996",
			"description": "This study was one of the first study to recognize soft fails in computer electronics.<br> <a href='https://scholar.google.com/scholar?cites=6358809673345087728&as_sdt=5,50&sciodt=0,50&hl=en' target='_blank'><img src='https://i.imgsafe.org/8ad79ce388.png' height='70%' width='70%'></a>",
			"icon": "fa-flash",
			"impact": "medium"
		},
		{
			"title": "Mukherjee '03",
			"publication": "Published in MICRO 2003",
			"description": "Introduced the novel idea of Architectural Vulnerabilty Factors and we should determine FITs based on the rate of propagation of errors to the user rather than errors that still result in correct execution.",
			"icon": "fa-percent",
			"impact": "medium"
		},
		{
			"title": "Saggese '05",
			"publication": "Published in IEEE Micro 2005",
			"description": "An experimental study examining the impact of soft errors on processor failures. <br> <a href='https://experts.illinois.edu/en/publications/an-experimental-study-of-soft-errors-in-microprocessors' target='_blank'><img src='http://images.slideplayer.com/16/5195108/slides/slide_2.jpg' height='90%' width='90%'></a>",
			"icon": "fa-chain-broken",
			"impact": "high"
		},
		{
			"title": "Gupta '09",
			"publication": "Published in ICCD 2009",
			"description": "Proposed an adaptive framework to monitor health overtime and predict failures. This could be used with a fluid approach to core allocation. <br> <a href='https://www.eecs.umich.edu/cse/awards/pdfs/iccd09.pdf' target='_blank'><img src='http://i.imgur.com/Ifyptu1.png' height='90%' width='90%'></a>",
			"icon": "fa-flash",
			"impact": "low"
		},
		{
			"title": "Sridharan '13",
			"publication": "Published in SC '13",
			"description": "First study to describe the effects of altitude on SRAM and DRAM faults. Additionally, one of the first large scale studies on SRAM faults.",
			"icon": "fa-cloud",
			"impact": "high"
		},
		{
			"title": "Sridharan '15",
			"publication": "Published in ASPLOS '15",
			"description": "Identified the main contributors to faults. <br> <a href='https://www.cs.virginia.edu/~gurumurthi/papers/asplos15.pdf' target='_blank'><img src='http://i.imgur.com/dapPHHr.png' height='90%' width='90%'></a>",
			"icon": "fa-exclamation",
			"impact": "high"
		}
	]
};