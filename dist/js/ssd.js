/*!
 * Start Bootstrap - A Survey of Modern Hardware Failures v3.3.7+1 (http://pages.cs.wisc.edu/~ssaurabh/cs739)
 * Copyright 2013-2016 Saket Saurabh
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
var SSD = {
	"topic": "SSD",
	"nodes": [
		{
			"id": 1,
			"label": "Grupp'09",
			"importance": 40,
			"paper-title": "Grupp, L. M., Caulfield, A. M., Coburn, J., Swanson, S., Yaakobi, E., Siegel, P. H., & Wolf, J. K. (2009, December). Characterizing flash memory: anomalies, observations, and applications. In 2009 42nd Annual IEEE/ACM International Symposium on Microarchitecture (MICRO) (pp. 24-33). IEEE.",
			"download-link": "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/Micro2009_FTest.pdf",
			"paper-highlights": "<ul> <li>This research talks about how flash drives fail, in general.</li> <li>It identifies three kinds of failures that can occur for flash devices:</li> <li> <ul> <li>wear-out</li> <li>program disturb, and</li> <li>read disturb.</li> </ul> </li> <li>It observes two interesting anomalies with the flash device behavior: <ul> <li>For MLC flash devices, there are 'fast' and 'slow' pages.</li> <li>For single SLC flash devices, program performance increases (by almost 50%) as the device wears out. This effect is due to charge trapping or breakdown of the gate oxide. As the oxide becomes a less effective insulator, it is easier to move the charge across it onto the gate. The same phenomenon is also responsible for the eventual failure of the cell, since it also makes it easier for the charge to leak off the floating gate.</li> </ul> </li> <li>The paper concludes that based on the observations in the paper, one can design intelligent FTLs and data encoding schemes that can increase the longevity of the flash device.</li> </ul>",
			"paper-observations": "<ul> <li>It is one of the earliest researches in the field to recognize the fact that flash usage data in the field differs vastly from the manufactures' specification sheet.</li> </ul>"
		},
		{
			"id": 2,
			"label": "Grupp'12",
			"importance": 20,
			"paper-title": "Grupp LM, Davis JD, Swanson S. The bleak future of NAND flash memory. In Proceedings of the 10th USENIX conference on File and Storage Technologies 2012 Feb 14 (pp. 2-2). USENIX Association.",
			"download-link": "https://www.usenix.org/legacy/event/fast/tech/full_papers/Grupp.pdf",
			"paper-highlights": "<p>This research claims that performance and reliability characteristics of SSDs are showing a decreasing trend as SSDs become denser and cheaper. The authors present the data which shows that each additional bit per cell increases write latency by 4&times; and reduces program/erase lifetime by 10&times; to 20&times;, while providing decreasing returns in density (2&times;, 1.5&times;, and 1.3&times; between 1-,2-,3- and 4- bit cells, respectively). As a result, we are reaching the limit of what current flash management techniques can deliver in terms of usable capacity &ndash; we may be able to build more spacious SSDs, but they may be too slow and unreliable to be competitive against disks of similar cost in enterprise applications.</p>",
			"paper-observations": "This paper also presents an interesting model to predict various characteristics of future SSDs based on a parameter model."
		},
		{
			"id": 3,
			"label": "Cai'12",
			"importance": 20,
			"paper-title": "Cai Y, Haratsch EF, Mutlu O, Mai K. Error patterns in MLC NAND flash memory: Measurement, characterization, and analysis. In2012 Design, Automation & Test in Europe Conference & Exhibition (DATE) 2012 Mar 12 (pp. 521-526). IEEE.",
			"download-link": "https://pdfs.semanticscholar.org/5a04/b332441e2ff025313bfd303383e13050a274.pdf",
			"paper-highlights": "<p>This research focuses on understanding flash memory error patterns and demonstrates distinct error patterns, along with detailed analyses. It classifies four different types of errors seen from controller's point of view:</p> <ul> <li><em>Erase error</em> &ndash; happens when an erase operation fails to reset the cells to the erased state. This is mainly due to manufacturing process variations or defects caused by trapped electrons in the tunnel oxide after stress due to repeated P/E cycles.</li> <li><em>Program interference error</em> &ndash; happens when the data stored in a page changes (unintentionally) while a neighbouring page is being programmed due to parasitic capacitance-coupling.</li> <li><em>Retention error</em> &ndash; happens when the data stored in a cell changes over time. The main reason is that the charge programmed in the floating gate may dissipate gradually through the leakage current.</li> <li><em>Read erro</em>r &ndash; happens when the data stored in a cell changes as a neighboring cell on the same string is read over and over.</li> </ul> <p>Further, it makes following observations about these errors:</p> <ul> <li>An SLC can tolerate ~10k program/erase (P/E) cycles while a 2-bit MLC can only survive for ~3k P/E cycles for 30-40 nm. The available P/E cycles are expected to decrease even more in the near future as flash cells continue to scale down in size and more than 2 bits are programmed per cell.</li> <li>The P/E cycle-dependence of errors can be explained by the deterioration of the tunnel oxide under cycling stress. During erase and program operations, the electric field strength across the tunnel oxide is very high (e.g., several million volts per centimeter). Such high electric field strength can lead to structural defects that trap electrons in the oxide layer. Over time, more and more defects accumulate and the insulation strength of the tunnel oxide degrades. As a result, charge can leak through the tunnel oxide and the threshold voltage of the cells can change more easily. This leads to more errors for all types of flash operations.</li> <li>There is a significant error rate difference between various types of errors. The long-term retention errors are the most dominant; their rate is highest. The program interference error rate ranks the second and is usually between error rates of 1-day and 3-day retention errors. The read error rate is slightly less than 1-day retention error rate, while the erase error rate is only around 7% of the read error rate.</li> <li>Retention error rates are highly dependent on retention test time. If the time before we test for retention errors is longer, the floating gate of flash memory is more likely to lose more electrons through leakage current.</li> </ul>",
			"paper-observations": "<p>This is one of&nbsp;the first papers that empirically analyzes error patterns in 3x-nm flash memory. The new observations of this paper beyond previous work were:</p> <ol> <li>They characterized and analyzed errors in modern flash memory from flash controller&rsquo;s point of view, categorizing them into four types: erase errors, program interference errors, retention errors and read errors.</li> <li>They showed the relationship between various types of errors and demonstrated empirically using real 3x-nm flash chips that retention errors are the most dominant error type.</li> <li>They demonstrated that different flash errors have distinct patterns: retention errors and program interference errors are P/E-cycledependent, memory-location-dependent, and data-value-dependent.</li> <li>They were the first to empirically demonstrate the location dependency of retention errors and program interference errors.</li> <li>They described the underlying circuit and device-level mechanisms that results in the observed error patterns. Since the observed error patterns are due to fundamental circuit and device behavior inherent in flash memory it is&nbsp;expected that their observations and error patterns will also hold in flash memories beyond 30-nm technology.</li> </ol>"
		},
		{
			"id": 4,
			"label": "Meza'15",
			"importance": 70,
			"paper-title": "Meza, J., Wu, Q., Kumar, S., & Mutlu, O. (2015, June). A large-scale study of flash memory failures in the field. In ACM SIGMETRICS Performance Evaluation Review (Vol. 43, No. 1, pp. 177-190). ACM.",
			"download-link": "http://pages.cs.wisc.edu/~remzi/Classes/739/Fall2016/Papers/flashfail-sigmetrics15.pdf",
			"paper-highlights": "<ul> <li>This paper presents the first large-scale study of flash-based SSD reliability in the field. The authors analyze data collected across a majority of flash-based solid state drives at Facebook data centers over nearly four years and many millions of operational hours in order to understand failure properties and trends of flash-based SSDs.</li> <li>The&nbsp;study considers a variety of SSD characteristics, including: the amount of data written to and read from flash chips; how data is mapped within the SSD address space; the amount of data copied, erased, and discarded by the flash controller; and flash board temperature and bus power.</li> <li>Based on the&nbsp;field analysis of how flash memory errors manifest when running modern workloads on modern SSDs, this paper is the first to make several major observations: <ul> <li>SSD failure rates do not increase monotonically with flash chip wear; instead they go through several distinct periods corresponding to how failures emerge and are subsequently detected,</li> <li>the effects of read disturbance errors are not prevalent in the field,</li> <li>sparse logical data layout across an SSD&rsquo;s physical address space (e.g., non-contiguous data), as measured by the amount of metadata required to track logical address translations stored in an SSD-internal DRAM buffer, can greatly affect SSD failure rate,</li> <li>higher temperatures lead to higher failure rates, but techniques that throttle SSD operation appear to greatly reduce the negative reliability impact of higher temperatures, and</li> <li>data written by the operating system to flash-based SSDs does not always accurately indicate the amount of wear induced on flash cells due to optimizations in the SSD controller and buffering employed in the system software.</li> </ul> </li> </ul>",
			"paper-observations": "<p>Given this was the first large-scale study of SSD drives, this research was well-received and sparked a huge interested in understanding the behavior of SSDs when used as a replacement for disks in current data centers.</p>"
		},
		{
			"id": 5,
			"label": "Schroeder'16",
			"importance": 80,
			"paper-title": "Schroeder B, Lagisetty R, Merchant A. Flash reliability in production: The expected and the unexpected. In14th USENIX Conference on File and Storage Technologies (FAST 16) 2016 (pp. 67-80).",
			"download-link": "http://pages.cs.wisc.edu/~remzi/Classes/739/Fall2016/Papers/fast16-schroeder.pdf",
			"paper-highlights": "Coming Soon",
			"paper-observations": "Coming Soon"
		},
		{
			"id": 6,
			"label": "Narayanan'16",
			"importance": 30,
			"paper-title": "Iyswarya Narayanan, Di Wang, Myeongjae Jeon, Bikash Sharma, Laura Caulfield, Anand Sivasubramaniam, Ben Cutler, Jie Liu, Badriddine Khessib, and Kushagra Vaid. 2016. SSD Failures in Datacenters: What? When? and Why?. In Proceedings of the 9th ACM International on Systems and Storage Conference (SYSTOR '16). ACM, New York, NY, USA",
			"download-link": "http://pages.cs.wisc.edu/~remzi/Classes/739/Fall2016/Papers/a7-narayanan.pdf",
			"paper-highlights": "Coming Soon",
			"paper-observations": "Coming Soon"
		},
		{
			"id": 7,
			"label": "Zheng'16",
			"importance": 10,
			"paper-title": "Zheng M, Tucek J, Qin F, Lillibridge M, Zhao BW, Yang ES. Reliability analysis of SSDs under power fault. ACM Transactions on Computer Systems (TOCS). 2016 Nov 1;34(4):10.",
			"download-link": "http://dl.acm.org/citation.cfm?id=2992782",
			"paper-highlights": "Coming Soon",
			"paper-observations": "Coming Soon"
		}
	],
	"edges": [
		{
			"from": 1,
			"to": 2,
			"edge-highlights": "The authors have used their flash characterization system which they developed in their previous work to perform experiments for this study.",
			"edge-observations": "The flash characterization system issues requests to a raw flash chip without FTL interference and measure the latency of each of these operations with 10 ns resolution. Its design is described in Grupp'09."
		},
		{
			"from": 1,
			"to": 3,
			"edge-highlights": "The previous work by Grupp showed the raw error data without providing detailed error type breakdowns or analyses. This work studies the error pattern in detail.",
			"edge-observations": "<p>This work advances the state of the art beyond these three works by</p> <ol> <li>demonstrating the dominance of retention errors,</li> <li>demonstrating error location dependency in flash memory, and</li> <li>providing detailed circuit-level and device-level explanations for the cause of errors.&nbsp;</li> </ol>"
		},
		{
			"from": 1,
			"to": 5,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 1,
			"to": 6,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 1,
			"to": 7,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 2,
			"to": 4,
			"edge-highlights": "<ul> <li>Recent work by Grupp et al. examined the BER of raw MLC flash chips (without performing error correction in the flash controller) in a controlled environment.</li> <li>They found the raw BER to vary from 1 &times; 10&minus;1 for the least reliable flash chips down to 1 &times; 10&minus;8 for the most reliable, with most chips having a BER in the 1 &times; 10&minus;6 to 1 &times; 10&minus;8 range.</li> <li><em><strong>Their study did not analyze the effects of the use of chips in SSDs under real workloads and system software.</strong></em></li> </ul>",
			"edge-observations": "<ul><li>This claims seem well supported.</li></ul>"
		},
		{
			"from": 2,
			"to": 5,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 2,
			"to": 6,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 2,
			"to": 7,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 3,
			"to": 4,
			"edge-highlights": "<p>Meza et. al. claim that although a series of previous works by Cai et al. identified patterns of errors for more recent MLC flash chips and proposed techniques to help mitigate their effects, yet the previous studies could&nbsp;help identify (and mitigate) the trends in flash error patterns at the raw chip level only. It is unclear from these studies to what extent flash-based SSDs in the field running real workloads and real system software over a long time may exhibit such error patterns (and how to ensure the reliability of such SSDs). For example, compared to prior chip-level studies, Meza et.al. find that</p> <ul> <li>SSD failure rates do not increase monotonically with flash chip wear;</li> <li>that read disturbance errors are not prevalent in the field;</li> <li>that the data layout across an SSD&rsquo;s physical address space has an effect on SSD failure rate;</li> <li>that SSD controller throttling techniques can help mitigate temperature-induced errors; and</li> <li>that optimizations in the SSD controllers and buffering employed in the system software reduces the amount of data written to flash chips.&nbsp;</li> </ul>",
			"edge-observations": "<p>These differences from prior studies can be attributed to the&nbsp;holistic study of flash errors by Meza et. al. when running on real SSD controllers, under real system software, and with real data center workloads.</p>"
		},
		{
			"from": 3,
			"to": 5,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 3,
			"to": 6,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 3,
			"to": 7,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 4,
			"to": 5,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 4,
			"to": 6,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 5,
			"to": 6,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 5,
			"to": 7,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		}
	],
	"timeline": [
		{
			"title": "Grupp'12",
			"publication": "Published in FAST 2012",
			"description": "<p>&quot;We are reaching the limit of what current flash management techniques can deliver in terms of usable capacity &ndash; we may be able to build more spacious SSDs, but they may be too slow and unreliable to be competitive against disks of similar cost in enterprise applications.&quot;</p><br><a href='https://c59951.ssl.cf2.rackcdn.com/fast12/grupp.mp4' target='_blank'><img src='https://i.imgsafe.org/82429551c4.png' height='90%' width='90%'></a>",
			"icon": "fa-battery-1",
			"impact": "high"
		},
		{
			"title": "Meza'15",
			"publication": "Published in ACM Sigmetrics 2015",
			"description": "This study done at Facebook was the first large-scale study of SSD failures in the field. <br><a href='https://research.fb.com/publications/a-large-scale-study-of-flash-memory-failures-in-the-field/' target='_blank'><img src='http://www.storagereview.com/images/StorageReview-Facebook-SSD-Failure.png' height='30%' width='50%'></a>",
			"icon": "fa-facebook",
			"impact": "medium"
		},
		{
			"title": "Schroeder'16",
			"publication": "Published in FAST 2016",
			"description": "Meza's work was followed by this work by Bianca at Google. It challenges many of the claims made in the previous work at Facebook and proposes that RBER (Raw Bit Error Rate) be seen as the main SSD failure measurement rate. <div class='row'> <div class='col-md-12'> <div class='embed-responsive embed-responsive-16by9'> <iframe class='embed-responsive-item' src='//www.youtube.com/embed/60OmhRJ0CUA'></iframe> </div> </div>",
			"icon": "fa-google",
			"impact": "high"
		},
		{
			"title": "Narayanan'16",
			"publication": "Published in FAST 2016",
			"description": "This study was done at Microsoft and it builds on the previous studies done at Facebook and Google. It proposes to build machine learning models to predict SSD failures.<br><a href='https://news.ycombinator.com/item?id=12046524' target='_blank'><img src='https://img.yumpu.com/55708727/1/358x202/ssd-failures-in-datacenters-what-when-and-why.jpg' height='90%' width='90%'></a>",
			"icon": "fa-windows",
			"impact": "low"
		}
	]
};