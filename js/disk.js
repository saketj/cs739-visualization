var DISK = {
	"topic": "DISK",
	"nodes": [
		{
			"id": 1,
			"label": "Bianca'07",
			"importance": 20,
			"paper-title": "Schroeder, B., & Gibson, G. A. (2007, February). Disk failures in the real world: What does an mttf of 1, 000, 000 hours mean to you?. In FAST (Vol. 7, pp. 1-16).",
			"download-link": "https://www.usenix.org/legacy/events/fast07/tech/schroeder/schroeder_html/index.html",
			"paper-highlights": "<ul> <li>Despite flash memory&rsquo;s promise, it suffers from many idiosyncrasies such as limited durability, data integrity problems, and asymmetry in operation granularity. As architects, we aim to find ways to overcome these idiosyncrasies while exploiting flash memory&rsquo;s useful characteristics.</li> <li>To be successful, we must understand the trade-offs between the performance, cost (in both power and dollars), and reliability of flash memory. In addition, we must understand how different usage patterns affect these characteristics.</li> <li>Flash manufacturers provide conservative guidelines about these metrics, and this lack of detail makes it difficult to design systems that fully exploit flash memory&rsquo;s capabilities.</li> <li>We have empirically characterized flash memory technology from five manufacturers by directly measuring the performance, power, and reliability.</li> <li>We demonstrate that performance varies significantly between vendors, devices, and from publicly available datasheets.</li> <li>We also demonstrate and quantify some unexpected device characteristics and show how we can use them to improve responsiveness and energy consumption of solid state disks by 44% and 13%, respectively, as well as increase flash device lifetime by 5.2x.</li> </ul>",
			"paper-observations": "<ul> <li>The devices we characterized in this study exhibited variation both within a block and over time in terms of power consumption, latency, and error rates.</li> <li>Our data also show that the values manufacturers provide in publicly available datasheets often tell only part of the story, and that actual performance can be significantly worse and highly variable.</li> <li>Our application case studies demonstrate that by looking beyond the datasheets manufacturers provide, we can make significant improvements to flash-based storage devices.</li> <li>Exploiting two of the effects we measured enabled us to significantly decrease latency for critical IO requests and extend the effective lifetimes of chips.</li> </ul>"
		},
		{
			"id": 2,
			"label": "Bairavasundaram'07",
			"importance": 70,
			"paper-title": "Bairavasundaram, L. N., Goodson, G. R., Pasupathy, S., & Schindler, J. (2007, June). An analysis of latent sector errors in disk drives. In ACM SIGMETRICS Performance Evaluation Review (Vol. 35, No. 1, pp. 289-300). ACM",
			"download-link": "http://research.cs.wisc.edu/wind/Publications/latent-sigmetrics07.pdf",
			"paper-highlights": "<ul> <li>This paper presents the first large-scale study of flash-based SSD reliability in the field. We analyze data collected across a majority of flash-based solid state drives at Facebook data centers over nearly four years and many millions of operational hours in order to understand failure properties and trends of flash-based SSDs.</li> <li>Our study considers a variety of SSD characteristics, including: the amount of data written to and read from flash chips; how data is mapped within the SSD address space; the amount of data copied, erased, and discarded by the flash controller; and flash board temperature and bus power.</li> <li>Based on our field analysis of how flash memory errors manifest when running modern workloads on modern SSDs, this paper is the first to make several major observations:</li> <li>(1) SSD failure rates do not increase monotonically with flash chip wear; instead they go through several distinct periods corresponding to how failures emerge and are subsequently detected,</li> <li>(2) the effects of read disturbance errors are not prevalent in the field,</li> <li>(3) sparse logical data layout across an SSD&rsquo;s physical address space (e.g., non-contiguous data), as measured by the amount of metadata required to track logical address translations stored in an SSD-internal DRAM buffer, can greatly affect SSD failure rate,</li> <li>(4) higher temperatures lead to higher failure rates, but techniques that throttle SSD operation appear to greatly reduce the negative reliability impact of higher temperatures, and</li> <li>(5) data written by the operating system to flash-based SSDs does not always accurately indicate the amount of wear induced on flash cells due to optimizations in the SSD controller and buffering employed in the system software. We hope that the findings of this first large-scale flash memory reliability study can inspire others to develop other publicly-available analyses and novel flash reliability solutions.</li> </ul>",
			"paper-observations": "<ul> <li><strong>Observation 1:</strong> We observe that SSDs go through several distinct failure periods &ndash; early detection, early failure, usable life, and wearout &ndash; during their lifecycle, corresponding to the amount of data written to flash chips.</li> <li><strong>Observation 2:</strong> We find that the effect of read disturbance errors is not a predominant source of errors in the SSDs we examine.</li> <li><strong>Observation 3:</strong> Sparse data layout across an SSD&rsquo;s physical address space (e.g., non-contiguously allocated data) leads to high SSD failure rates; dense data layout (e.g., contiguous data) can also negatively impact reliability under certain conditions, likely due to adversarial access patterns.</li> <li><strong>Observation 4:</strong> Higher temperatures lead to increased failure rates, but do so most noticeably for SSDs that do not employ throttling techniques.&nbsp;</li> <li><strong>Observation 5:</strong> The amount of data reported to be written by the system software can overstate the amount of data actually written to flash chips, due to system-level buffering and wear reduction techniques.</li> </ul>"
		},
		{
			"id": 3,
			"label": "Pinheiro'07",
			"importance": 70,
			"paper-title": "Pinheiro, Eduardo, Wolf-Dietrich Weber, and Luiz André Barroso. Failure Trends in a Large Disk Drive Population. FAST. Vol. 7. 2007",
			"download-link": "https://static.googleusercontent.com/media/research.google.com/en//archive/disk_failures.pdf",
			"paper-highlights": "<ul> <li>This paper provides a large-scale field study covering many millions of drive days, ten different drive models, different flash technologies (MLC, eMLC, SLC) over 6 years of production use in Google&rsquo;s data centers.</li> <li>We study a wide range of reliability characteristics and come to a number of unexpected conclusions. For example, raw bit error rates (RBER) grow at a much slower rate with wear-out than the exponential rate commonly assumed and, more importantly, they are not predictive of uncorrectable errors or other error modes.</li> <li>The widely used metric UBER (uncorrectable bit error rate) is not a meaningful metric, since we see no correlation between the number of reads and the number of uncorrectable errors. We see no evidence that higher-end SLC drives are more reliable than MLC drives within typical drive lifetimes. Comparing with traditional hard disk drives, flash drives have a significantly lower replacement rate in the field, however, they have a higher rate of uncorrectable errors.</li> </ul>",
			"paper-observations": "<ul> <li>Between 20&ndash;63% of drives experience at least one uncorrectable error during their first four years in the field, making uncorrectable errors the most common non-transparent error in these drives. Between 2&ndash;6 out of 1,000 drive days are affected by them.</li> <li>The majority of drive days experience at least one correctable error, however other types of transparent errors, i.e. errors which the drive can mask from the user, are rare compared to non-transparent errors.</li> <li>We find that RBER (raw bit error rate), the standard metric for drive reliability, is not a good predictor of those failure modes that are the major concern in practice. In particular, higher RBER does not translate to a higher incidence of uncorrectable errors.</li> <li>We find that UBER (uncorrectable bit error rate), the standard metric to measure uncorrectable errors, is not very meaningful. We see no correlation between UEs and number of reads, so normalizing uncorrectable errors by the number of bits read will artificially inflate the reported error rate for drives with low read count.</li> <li>Both RBER and the number of uncorrectable errors grow with PE cycles, however the rate of growth is slower than commonly expected, following a linear rather than exponential rate, and there are no sudden spikes once a drive exceeds the vendor&rsquo;s PE cycle limit, within the PE cycle ranges we observe in the field.</li> </ul>"
		},
		{
			"id": 4,
			"label": "Bairavasundaram'08",
			"importance": 50,
			"paper-title": "Bairavasundaram, L. N., Arpaci-Dusseau, A. C., Arpaci-Dusseau, R. H., Goodson, G. R., & Schroeder, B. (2008).An analysis of data corruption in the storage stack. ACM Transactions on Storage (TOS), 4(3), 8.",
			"download-link": "http://pages.cs.wisc.edu/~remzi/Classes/739/Fall2016/Papers/corruption-fast08.pdf",
			"paper-highlights": "Narayanan highlights",
			"paper-observations": "Narayanan observations"
		},
		{
			"id": 5,
			"label": "Jiang'08",
			"importance": 30,
			"paper-title": "Jiang, W., Hu, C., Zhou, Y., & Kanevsky, A. (2008). Are disks the dominant contributor for storage failures?: A comprehensive study of storage subsystem failure characteristics. ACM Transactions on Storage (TOS), 4(3), 7.",
			"download-link": "https://www.usenix.org/legacy/event/fast08/tech/full_papers/jiang/jiang_html/",
			"paper-highlights": "Zheng highlights",
			"paper-observations": "Zheng observations"
		},
		{
			"id": 6,
			"label": "Schroeder'10",
			"importance": 10,
			"paper-title": "Schroeder, B., Damouras, S., & Gill, P. (2010). Understanding latent sector errors and how to protect against them. ACM Transactions on storage (TOS), 6(3), 9.",
			"download-link": "https://www.usenix.org/legacy/event/fast10/tech/full_papers/schroeder.pdf",
			"paper-highlights": "Wang highlights",
			"paper-observations": "Wang observations"
		}
	],
	"edges": [
		{
			"from": 1,
			"to": 2,
			"edge-highlights": "<ul> <li>Recent work by Grupp et al. examined the BER of raw MLC flash chips (without performing error correction in the flash controller) in a controlled environment.</li> <li>They found the raw BER to vary from 1 &times; 10&minus;1 for the least reliable flash chips down to 1 &times; 10&minus;8 for the most reliable, with most chips having a BER in the 1 &times; 10&minus;6 to 1 &times; 10&minus;8 range.</li> <li><em><strong>Their study did not analyze the effects of the use of chips in SSDs under real workloads and system software.</strong></em></li> </ul>",
			"edge-observations": "<ul><li>This claims seem well supported.</li></ul>"
		},
		{
			"from": 1,
			"to": 3,
			"edge-highlights": "none-1-3",
			"edge-observations": "coming soon"
		},
		{
			"from": 2,
			"to": 3,
			"edge-highlights": "<div class = 'row'> <div class='col-md-12'><ul> <li>Schroder's study and Meza's study complement each other well, as they have very little overlap.</li> <li>The data in the Facebook study consists of a single snapshot in time for a fleet consisting of very young (in terms of the usage they have seen in comparison to their PE cycle limit) MLC drives and has information on uncorrectable errors only, while Schroder's&nbsp;study is based on per-drive time series data spanning drives&rsquo; entire lifecycle and includes detailed information on different types of errors, including correctable errors, and different types of hardware failures, as well as drives from different technologies (MLC, eMLC, SLC).</li> <li>As a result Schroder's&nbsp;study spans a broader range of error and failure modes, including wear-out effects across a drive&rsquo;s entire life. On the other hand, the Facebook study includes the role of some factors (temperature, bus power consumption, DRAM buffer usage) that our data does not account for.</li> </ul></div></div>",
			"edge-observations": "None yet"
		},
		{
			"from": 2,
			"to": 4,
			"edge-highlights": "none-2-4",
			"edge-observations": "coming soon"
		},
		{
			"from": 4,
			"to": 5,
			"edge-highlights": "none-4-5",
			"edge-observations": "coming soon"
		},
		{
			"from": 5,
			"to": 6,
			"edge-highlights": "none-5-6",
			"edge-observations": "coming soon"
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