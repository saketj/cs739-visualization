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
			"paper-highlights": "<p>This paper provides a large-scale field study covering many millions of drive days, ten different drive models, different flash technologies (MLC, eMLC, SLC) over 6 years of production use in Google&rsquo;s data centers. Some of these support common assumptions and expectations, while many were unexpected. This paper draws the following conclusions:</p> <ul> <li>Between 20&ndash;63% of drives experience at least one uncorrectable error during their first four years in the field, making uncorrectable errors the most common non-transparent error in these drives. Between 2&ndash;6 out of 1,000 drive days are affected by them.</li> <li>The majority of drive days experience at least one correctable error, however other types of transparent errors, i.e. errors which the drive can mask from the user, are rare compared to non-transparent errors.</li> <li>The RBER (raw bit error rate), the standard metric for drive reliability, is not a good predictor of those failure modes that are the major concern in practice. In particular, higher RBER does not translate to a higher incidence of uncorrectable errors.</li> <li>The UBER (uncorrectable bit error rate), the standard metric to measure uncorrectable errors, is not very meaningful. There is&nbsp;no correlation between UEs and number of reads, so normalizing uncorrectable errors by the number of bits read will artificially inflate the reported error rate for drives with low read count.</li> <li>Both RBER and the number of uncorrectable errors grow with PE cycles, however the rate of growth is slower than commonly expected, following a linear rather than exponential rate, and there are no sudden spikes once a drive exceeds the vendor&rsquo;s PE cycle limit, within the PE cycle ranges we observe in the field.</li> <li>SLC drives, which are targeted at the enterprise market and considered to be higher end, are not more reliable than the lower end MLC drives.</li> <li>It is observed that chips with smaller feature size tend&nbsp;to experience higher RBER, but are not necessarily the ones with the highest incidence of non-transparent errors, such as uncorrectable errors.</li> <li>While flash drives offer lower field replacement rates than hard disk drives, they have a significantly higher rate of problems that can impact the user, such as uncorrectable errors.</li> <li>Previous errors of various types are predictive of later uncorrectable errors.</li> <li>Bad blocks and bad chips occur at a signicant rate: depending on the model, 30-80% of drives develop at least one bad block and and 2-7% develop at least one bad chip during the first four years in the field.</li> <li>Drives tend to either have less than a handful of bad blocks, or a large number of them, suggesting that impending chip failure could be predicted based on prior number of bad blocks (and maybe other factors). Also, a drive with a large number of factory bad blocks has a higher chance of developing more bad blocks in the field, as well as certain types of errors.</li> </ul>",
			"paper-observations": "This research has been well-received because it studies SSD drive failures at a much large scale."
		},
		{
			"id": 6,
			"label": "Narayanan'16",
			"importance": 30,
			"paper-title": "Iyswarya Narayanan, Di Wang, Myeongjae Jeon, Bikash Sharma, Laura Caulfield, Anand Sivasubramaniam, Ben Cutler, Jie Liu, Badriddine Khessib, and Kushagra Vaid. 2016. SSD Failures in Datacenters: What? When? and Why?. In Proceedings of the 9th ACM International on Systems and Storage Conference (SYSTOR '16). ACM, New York, NY, USA",
			"download-link": "http://pages.cs.wisc.edu/~remzi/Classes/739/Fall2016/Papers/a7-narayanan.pdf",
			"paper-highlights": "<p>This paper presents an extensive SSD failure characterization by analyzing a wide spectrum of data from over half a million SSDs that span multiple generations spread across several datacenters which host a wide spectrum of workloads over nearly 3 years.&nbsp;By studying the diverse set of design, provisioning and operational factors on failures, and their symptoms, this&nbsp;work tries to answer the&nbsp;what, when and why characteristics of SSD failures in production datacenters. This paper makes the following observations:</p> <ul> <li>The observed Annualized Failure Rate (AFR) in these production datacenters for some models is significantly higher (as much as 70%) than that quoted in SSD specifications, reiterating the need for this kind of field study.</li> <li>Four symptoms - Data Errors (Uncorrectable and CRC), Sector Reallocations, Program/Erase Failures and SATA Downshift - experienced by SSDs at the lower levels are the most important (in that order) of those captured by the SMART attributes.</li> <li>There is a higher likelihood of the symptoms (captured by SMART) preceding SSD failures, with an intense manifestation preventing their survivability beyond a few months.</li> <li>It is&nbsp;shown that SSD failure&nbsp;symptoms are not a sufficient indicator for diagnosing failures.</li> <li>The provisioning (what model? where deployed? etc.) and operational parameters (write rates, write amplification, etc.) all show some correlation with SSD failures. This motivates the need for not just a relative ordering of their influence (to be useful to a datacenter operator), but also a systematic multi-factor analysis of them all to better answer the what, when and why of SSD failures.</li> <li>The authors use machine learning models and graphical causal models to jointly evaluate the impact of all relevant factors on failures.</li> </ul>",
			"paper-observations": "<p>Previous works have mostly focused on a single parameter analysis of SSD failures for a fleet comprising mainly of devices with equivalent read/write rates. This work in interesting because it&nbsp;investigates a wide set of failures that impact SSD/server downtimes, and studied the impact of a diverse set of design, provisioning and operational parameters on the failures (and their symptoms), with an effort to come up with the answer to What? Why? and When? SSDs fail.</p>"
		},
		{
			"id": 7,
			"label": "Zheng'16",
			"importance": 10,
			"paper-title": "Zheng M, Tucek J, Qin F, Lillibridge M, Zhao BW, Yang ES. Reliability analysis of SSDs under power fault. ACM Transactions on Computer Systems (TOCS). 2016 Nov 1;34(4):10.",
			"download-link": "http://dl.acm.org/citation.cfm?id=2992782",
			"paper-highlights": "<p>This research considers the behavior of flash-based SSDs under power fault. Specifically, it&nbsp;considers how commercially available SSDs behave when power is cut unexpectedly during operation.</p>",
			"paper-observations": "<p>Although loss of power seems like an easy fault to prevent, recent published studies show that a simple loss of power is still a distressingly frequent occurrence even for sophisticated datacenter operators like Amazon. If even well-prepared and experienced datacenter operators cannot ensure continuous power, then it becomes critical that we understand how non-volatile components like SSDs behave when they lose power.</p>"
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
			"edge-highlights": "Grupp et al. report RBER rates for drives that are close to reaching their PE cycle limit. For SLC and MLC devices with feature sizes similar to the ones in Schroeder.et.al's work (25-50nm), the RBER reported by Grupp et.al. ranges from 1e-08 to 1e-03, with most drive models experiencing RBER close to 1e-06. The three drive models in Schroeder.et.al's study that reach their PE cycle limit experienced RBER between 3e-08 to 8e-08. Even taking into account that these numbers are lower bounds and in the absolute worst case could be 16X higher, or looking at the 95th percentile of RBER, these newly reported rates are significantly lower.",
			"edge-observations": "In summary, while the field RBER rates are higher than in-house projections based on accelerated life tests, they are lower than most RBER reported in other work for comparable devices based on lab tests. This suggests that predicting field RBER in accelerated life tests is not straight-forward."
		},
		{
			"from": 1,
			"to": 7,
			"edge-highlights": "<p>Much work has been done on analyzing the reliability of raw flash memory chips [Grupp et. al. and Cai et. al.] and understanding the device-level reliability of SSDs [Meza et. al., Schroeder et.al. and Narayanan et. al.] However, this is the first of its kind work that undertakes to understand the device-level behavior of SSDs under power faults.&nbsp;</p>",
			"edge-observations": "This claim seems well-supported."
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
			"edge-highlights": "Grupp et al. report RBER rates for drives that are close to reaching their PE cycle limit. For SLC and MLC devices with feature sizes similar to the ones in Schroeder.et.al's work (25-50nm), the RBER reported by Grupp et.al. ranges from 1e-08 to 1e-03, with most drive models experiencing RBER close to 1e-06. The three drive models in Schroeder.et.al's study that reach their PE cycle limit experienced RBER between 3e-08 to 8e-08. Even taking into account that these numbers are lower bounds and in the absolute worst case could be 16X higher, or looking at the 95th percentile of RBER, these newly reported rates are significantly lower.",
			"edge-observations": "In summary, while the field RBER rates are higher than in-house projections based on accelerated life tests, they are lower than most RBER reported in other work for comparable devices based on lab tests. This suggests that predicting field RBER in accelerated life tests is not straight-forward."
		},
		{
			"from": 2,
			"to": 7,
			"edge-highlights": "<p>Much work has been done on analyzing the reliability of raw flash memory chips [Grupp et. al. and Cai et. al.] and understanding the device-level reliability of SSDs [Meza et. al., Schroeder et.al. and Narayanan et. al.] However, this is the first of its kind work that undertakes to understand the device-level behavior of SSDs under power faults.&nbsp;</p>",
			"edge-observations": "This claim seems well-supported."
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
			"edge-highlights": "<p>Cai et. al. identify error patterns in SSD under controlled lab experiments, whereas Schroeder et. al. are interested in behaviour of flash drives in the field, and note that their observations sometimes differ from those previously published studies. For example, they&nbsp;find that RBER is not a good indicator for the likelihood of uncorrectable errors and that RBER grows linearly rather than exponentially with PE cycles.</p>",
			"edge-observations": "This claim seems well-supported."
		},
		{
			"from": 3,
			"to": 7,
			"edge-highlights": "<p>Much work has been done on analyzing the reliability of raw flash memory chips [Grupp et. al. and Cai et. al.] and understanding the device-level reliability of SSDs [Meza et. al., Schroeder et.al. and Narayanan et. al.] However, this is the first of its kind work that undertakes to understand the device-level behavior of SSDs under power faults.&nbsp;</p>",
			"edge-observations": "This claim seems well-supported."
		},
		{
			"from": 4,
			"to": 5,
			"edge-highlights": "<p>Schroeder et. al. study and Meza et. al. study complement each other.</p> <ul> <li>The data in the Facebook study consists of a single snapshot in time for a fleet consisting of very young (in terms of the usage they have seen in comparison to their PE cycle limit) MLC drives and has information on uncorrectable errors only, while the Google&nbsp;study is based on per-drive time series data spanning drives&rsquo; entire lifecycle and includes detailed information on different types of errors, including correctable errors, and different types of hardware failures, as well as drives from different technologies (MLC, eMLC, SLC).</li> <li>The Facebook paper presents rates of uncorrectable errors and studies them as a function of usage. They observe significant infant mortality (which they refer to as early detection and early failure), while Schroeder et.al. don't. Besides differences in burn-in testing at the two companies, which might affect infant mortality, the differences might also be due to the fact that the Facebook study presents more of a close-up view of a drive&rsquo;s early life (with no datapoints past a couple of hundred PE cycles for drives whose PE cycle limits are in the tens of thousands) while our view is more macroscopic spanning the entire lifecycle of a drive.</li> <li>The Facebook study concludes that read disturb errors are not a significant factor in the field. Schroeder et. al.'s&nbsp;view of read disturb errors is more differentiated, showing that while read disturb does not create uncorrectable errors, read disturb errors happen at a rate that is significant enough to affect RBER in the field.&nbsp;</li> </ul>",
			"edge-observations": "The Google study spans a broader range of error and failure modes, including wear-out effects across a drive’s entire life. On the other hand, the Facebook study includes the role of some factors (temperature, bus power consumption, DRAM buffer usage) that our data does not account for."
		},
		{
			"from": 4,
			"to": 6,
			"edge-highlights": "<p>Narayanan et. al. claim that previous works (i) have only examined a single kind of SSD hardware failure (bit error rates) and not all possible SSD failures that could take the server down; and (ii) have analyzed correlating factors independently, which makes it difficult to understand the what, when and why answers that could depend on several workload and datacenter spatio-temporal factors.</p>",
			"edge-observations": "The fact that whether there is a correlation with spatio-temporal characteristics of the datacenter, needs further investigation."
		},
		{
			"from": 5,
			"to": 6,
			"edge-highlights": "<p>Narayanan et. al. claim that previous works (i) have only examined a single kind of SSD hardware failure (bit error rates) and not all possible SSD failures that could take the server down; and (ii) have analyzed correlating factors independently, which makes it difficult to understand the what, when and why answers that could depend on several workload and datacenter spatio-temporal factors.</p>",
			"edge-observations": "The fact that whether there is a correlation with spatio-temporal characteristics of the datacenter, needs further investigation."
		},
		{
			"from": 5,
			"to": 7,
			"edge-highlights": "<p>Much work has been done on analyzing the reliability of raw flash memory chips [Grupp et. al. and Cai et. al.] and understanding the device-level reliability of SSDs [Meza et. al., Schroeder et.al. and Narayanan et. al.] However, this is the first of its kind work that undertakes to understand the device-level behavior of SSDs under power faults.&nbsp;</p>",
			"edge-observations": "This claim seems well-supported."
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