var SSD = {
	"topic": "SSD",
	"nodes": [
		{
			"id": 1,
			"label": "Grupp'09",
			"importance": 40,
			"paper-title": "Grupp, L. M., Caulfield, A. M., Coburn, J., Swanson, S., Yaakobi, E., Siegel, P. H., & Wolf, J. K. (2009, December). Characterizing flash memory: anomalies, observations, and applications. In 2009 42nd Annual IEEE/ACM International Symposium on Microarchitecture (MICRO) (pp. 24-33). IEEE.",
			"download-link": "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/Micro2009_FTest.pdf",
			"paper-highlights": "<ul> <li>This research talks about how flash drives fail, in general.</li> <li>It identifies three kinds of failures that can occur for flash devices:</li> <li> <ul> <li>wear-out</li> <li>program disturb, and</li> <li>read disturb.</li> </ul> </li> <li>It observes two interesting anomalies with the flash device behavior: <ul> <li>For MLC flash devices, there are 'fast' and 'slow' pages.</li> <li>For single SLC flash devices, program performance increases (by almost 50%) as the device wears out.</li> </ul> </li> <li>The paper concludes that based on the observations in the paper, one can design intelligent FTLs and data encoding schemes that can increase the longevity of the flash device.</li> </ul>",
			"paper-observations": "<ul> <li>It is one of the earliest researches in the field to recognize the fact that flash usage data in the field differs vastly from the manufactures' specification sheet.</li> </ul>"
		},
		{
			"id": 2,
			"label": "Grupp'12",
			"importance": 20,
			"paper-title": "Grupp LM, Davis JD, Swanson S. The bleak future of NAND flash memory. In Proceedings of the 10th USENIX conference on File and Storage Technologies 2012 Feb 14 (pp. 2-2). USENIX Association.",
			"download-link": "https://www.usenix.org/legacy/event/fast/tech/full_papers/Grupp.pdf",
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"id": 3,
			"label": "Cai'12",
			"importance": 20,
			"paper-title": "Cai Y, Haratsch EF, Mutlu O, Mai K. Error patterns in MLC NAND flash memory: Measurement, characterization, and analysis. In2012 Design, Automation & Test in Europe Conference & Exhibition (DATE) 2012 Mar 12 (pp. 521-526). IEEE.",
			"download-link": "https://pdfs.semanticscholar.org/5a04/b332441e2ff025313bfd303383e13050a274.pdf",
			"paper-highlights": "",
			"paper-observations": ""
		},
		{
			"id": 4,
			"label": "Meza'15",
			"importance": 70,
			"paper-title": "Meza, J., Wu, Q., Kumar, S., & Mutlu, O. (2015, June). A large-scale study of flash memory failures in the field. In ACM SIGMETRICS Performance Evaluation Review (Vol. 43, No. 1, pp. 177-190). ACM.",
			"download-link": "http://pages.cs.wisc.edu/~remzi/Classes/739/Fall2016/Papers/flashfail-sigmetrics15.pdf",
			"paper-highlights": "<ul> <li>This paper presents the first large-scale study of flash-based SSD reliability in the field. We analyze data collected across a majority of flash-based solid state drives at Facebook data centers over nearly four years and many millions of operational hours in order to understand failure properties and trends of flash-based SSDs.</li> <li>Our study considers a variety of SSD characteristics, including: the amount of data written to and read from flash chips; how data is mapped within the SSD address space; the amount of data copied, erased, and discarded by the flash controller; and flash board temperature and bus power.</li> <li>Based on our field analysis of how flash memory errors manifest when running modern workloads on modern SSDs, this paper is the first to make several major observations:</li> <li>(1) SSD failure rates do not increase monotonically with flash chip wear; instead they go through several distinct periods corresponding to how failures emerge and are subsequently detected,</li> <li>(2) the effects of read disturbance errors are not prevalent in the field,</li> <li>(3) sparse logical data layout across an SSD&rsquo;s physical address space (e.g., non-contiguous data), as measured by the amount of metadata required to track logical address translations stored in an SSD-internal DRAM buffer, can greatly affect SSD failure rate,</li> <li>(4) higher temperatures lead to higher failure rates, but techniques that throttle SSD operation appear to greatly reduce the negative reliability impact of higher temperatures, and</li> <li>(5) data written by the operating system to flash-based SSDs does not always accurately indicate the amount of wear induced on flash cells due to optimizations in the SSD controller and buffering employed in the system software. We hope that the findings of this first large-scale flash memory reliability study can inspire others to develop other publicly-available analyses and novel flash reliability solutions.</li> </ul>",
			"paper-observations": "<ul> <li><strong>Observation 1:</strong> We observe that SSDs go through several distinct failure periods &ndash; early detection, early failure, usable life, and wearout &ndash; during their lifecycle, corresponding to the amount of data written to flash chips.</li> <li><strong>Observation 2:</strong> We find that the effect of read disturbance errors is not a predominant source of errors in the SSDs we examine.</li> <li><strong>Observation 3:</strong> Sparse data layout across an SSD&rsquo;s physical address space (e.g., non-contiguously allocated data) leads to high SSD failure rates; dense data layout (e.g., contiguous data) can also negatively impact reliability under certain conditions, likely due to adversarial access patterns.</li> <li><strong>Observation 4:</strong> Higher temperatures lead to increased failure rates, but do so most noticeably for SSDs that do not employ throttling techniques.&nbsp;</li> <li><strong>Observation 5:</strong> The amount of data reported to be written by the system software can overstate the amount of data actually written to flash chips, due to system-level buffering and wear reduction techniques.</li> </ul>"
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
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
		},
		{
			"from": 1,
			"to": 3,
			"edge-highlights": "Coming soon",
			"edge-observations": "Coming soon"
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
			"edge-highlights": "<ul> <li>Recent work by Grupp et al. examined the BER of raw MLC flash chips (without performing error correction in the flash controller) in a controlled environment.</li> <li>They found the raw BER to vary from 1 &times; 10&minus;1 for the least reliable flash chips down to 1 &times; 10&minus;8 for the most reliable, with most chips having a BER in the 1 &times; 10&minus;6 to 1 &times; 10&minus;8 range.</li> <li><em><strong>Their study did not analyze the effects of the use of chips in SSDs under real workloads and system software.</strong></em></li> </ul>",
			"edge-observations": "<ul><li>This claims seem well supported.</li></ul>"
		},
		{
			"from": 3,
			"to": 5,
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
			"title": "Meza'15",
			"publication": "Published in ACM Sigmetrics 2015",
			"description": "This study done at Facebook was the first large-scale study of SSD failures in the field.",
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
			"description": "This study was done at Microsoft and it builds on the previous studies done at Facebook and Google. It proposes to build machine learning models to predict SSD failures.",
			"icon": "fa-windows",
			"impact": "low"
		}
	]
};