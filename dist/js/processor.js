/*!
 * Start Bootstrap - A Survey of Modern Hardware Failures v3.3.7+1 (http://pages.cs.wisc.edu/~ssaurabh/cs739)
 * Copyright 2013-2016 Saket Saurabh
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
var PROCESSOR = {
	"topic": "PROCESSOR",
	"nodes": [
		{
			"id": 1,
			"label": "Ziegler'96",
			"importance": 20,
			"paper-title": "Ziegler JF, Curtis HW, Muhlfeld HP, Montrose CJ, Chin B. IBM experiments in soft fails in computer electronics (1978–1994). IBM journal of research and development. 1996 Jan 1;40(1):3-18.",
			"download-link": "http://ieeexplore.ieee.org/document/5389432/",
			"paper-highlights": "<p>This historical review covers IBM experiments in evaluating radiation-induced soft fails in LSI electronics over a fifteen-year period, concentrating on major scientific and technical advances which were not previously published. This paper focuses primarily on soft fails caused at the computer chip level by two types of nuclear radiaion: (1) the decay of radioactive atoms which exist in trace amounts in all materials, and (2)&nbsp;extraterrestrial cosmic rays which bombard the earth constantly from the far depths of the galaxy.&nbsp;</p> <p>Some of the conclusions discussed in the paper are:</p> <ul> <li>The cosmic ray intensity is greatest at high terrestrial altitudes, and approaches zero under extensive shielding.</li> <li>In all tests, the observed fail rate scaled directly with the cosmic ray intensity, over a total observed change of more than 1OOOx.</li> <li>As LSI memory devices become smaller, they become more sensitive to nuclear-radiation-induced soft fails.</li> <li>The circuit types most resistant to soft errors are CMOS and n-MOS static arrays, and DRAMS with deep buried layers to prevent chargefunneling.</li> <li>The circuits most sensitive to cosmic rays are bipolar SRAMs. For recent circuits, the SER differences between various chips span more than four decades of sensitivity.</li></ul>",
			"paper-observations": "This work originated in 1978, went through several years of research to verify its magnitude, and became a significant factor in IBM’s efforts toward improved product reliability."
		},
		{
			"id": 2,
			"label": "Saggese'05",
			"importance": 70,
			"paper-title": "Saggese GP, Wang NJ, Kalbarczyk ZT, Patel SJ, Iyer RK. An experimental study of soft errors in microprocessors. IEEE micro. 2005 Nov 1;25(6):30-9.",
			"download-link": "https://www.researchgate.net/profile/Nicholas_Wang/publication/3215503_An_experimental_study_of_soft_errors_in_microprocessors/links/00b49533501e4d267d000000.pdf",
			"paper-highlights": "<p>Given that the issue of soft-errors is an emerging concern in the design of future microprocessors, the authors examine the impact of soft errors on processor failures. This study was conducted in a simulated environment&nbsp;by artifically injecting faults in two types of processors: (1) a DLX processor used in&nbsp;embedded computing&nbsp;and, (2) an alpha processor used in high-performance computing.</p> <p>Some of the conclusions discussed in the paper are:</p> <ul> <li>Future systems will be more susceptible to soft fails because of the confluence&nbsp;of device and voltage scaling and increasing system complexity.</li> <li>These soft fail errors are caused by&nbsp;energetic radiation particles, capacitive coupling, electromagnetic interference, and other sources of electrical noise.</li> <li>A significant percentage of faults originating within the processor chip is masked at the processor logic or architectural level and do not even manifest at processor pins.</li> <li>Different functional blocks of processor have different fault sensitivity. For example, flip-flops holding information about instruction pipeline are eight times more sensitive to faults than flip-flops representing address fields for memory operations.</li> <li>Sequential logic elements are more prone to faults than combinational logic blocks.</li> <li>Processor-level faults can cause following types of application-level failures: <ul> <li>Application Crash (~23%)</li> <li>Fail-silent data violations (~12%)</li> <li>Incomplete execution (~12%)</li> <li>Have no effect in about (~53%) of cases.</li> </ul> </li> <li>Soft fails in processor can cause two types of faults to manifest in processor chips: (1) Bit flips in sequential elements, and (2) Transient voltage pulses in combinational elements.</li> <li>About 53% of errors that propagate outside the processor boundaries do not impact the application's correct behavior.</li> <li>Most of the soft-fail errors can be fixed via replication, error correction code, radiation-hardened standard cells or using error-trapping latches.</li> </ul>",
			"paper-observations": "<p>Although this is a good experimental study characterizing the impact of soft-fail errors in processors, it does not present any conclusive evidence as to how often such soft-fail errors will be encountered in actual production systems.</p>"
		}
	],
	"edges": [],
	"timeline": [
		{
			"title": "Ziegler'96",
			"publication": "Published in IBM Journal 1996",
			"description": "This study was one of the first study to recognize soft fails in computer electronics.<br> <a href='https://scholar.google.com/scholar?cites=6358809673345087728&as_sdt=5,50&sciodt=0,50&hl=en' target='_blank'><img src='https://i.imgsafe.org/8ad79ce388.png' height='70%' width='70%'></a>",
			"icon": "fa-flash",
			"impact": "medium"
		},
		{
			"title": "Saggese'05",
			"publication": "Published in IEEE Micro 2005",
			"description": "An experimental study examining the impact of soft errors on processor failures. <br> <a href='https://experts.illinois.edu/en/publications/an-experimental-study-of-soft-errors-in-microprocessors' target='_blank'><img src='http://images.slideplayer.com/16/5195108/slides/slide_2.jpg' height='90%' width='90%'></a>",
			"icon": "fa-chain-broken",
			"impact": "high"
		}
	]
};