import Head from 'next/head';
import Header from '../components/Header';
import NewsMainPageContainer from '../components/NewsMainPageContainer';
import Footer from '../components/Footer';

export default function Home({ posts, sliderPosts }) {
  return (
    <>
      <Head>
        <title>Mub Music | The World's biggest music catalog</title>
        <meta name="description" content="The World's biggest music catalog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mub Music | The World's biggest music catalog" key="title" />
        <meta property="og:description" content="The World's biggest music catalog" />
        <script src="https://www.googletagservices.com/tag/js/gpt.js"></script>
        <script async='async' type="text/javascript" src="https://exame.com/wp-content/themes/exame-new/js/prebid.min.js?v-abrad=7.68"></script>
        <script 
        dangerouslySetInnerHTML={{ 
            __html: `
            const PREBID_TIMEOUT = 1500;
            const FAILSAFE_TIMEOUT = 3000;

            const googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];

            const pbjs = window.pbjs || {};
            pbjs.que = pbjs.que || [];

            const customData = window.customData || {};
            customData.tag = customData.tag || [];
            const WEBSITE = customData['website'];
            const SECTION = customData['section'];

            const adUnits = [{
              code: '${({ theme }) => theme.ads.network}/exame/home',
              mediaTypes: {
                  banner: {
                      sizes: [[1300, 250], [980, 200], [970, 90], [728, 90]]
                  }
              },
              bids: [{
                  bidder: 'onemobile',
                  params: {
                      dcn: '8a9690d401757594a67098b28abb005e',
                      pos: 'exame_desktop_billboard'
                  }
              }]
            }];

            googletag.cmd.push(function() {
              googletag.pubads().disableInitialLoad();
            });

            pbjs.que.push(function() {
                pbjs.addAdUnits(adUnits);
                pbjs.requestBids({
                    bidsBackHandler: initAdserver,
                    timeout: PREBID_TIMEOUT
                });
            });

            function initAdserver() {
                if (pbjs.initAdserverSet) return;
                pbjs.initAdserverSet = true;
                googletag.cmd.push(function() {
                    pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
                    googletag.pubads().refresh();
                });
            }
            
            setTimeout(function() {
                initAdserver();
            }, FAILSAFE_TIMEOUT);

            googletag.cmd.push(function() {
              var REFRESH_KEY = 'refresh';
              var REFRESH_VALUE = 'true';
              var mapping1 = googletag.sizeMapping()
                      .addSize([0, 0], [[336, 280],[300,250],[320, 50],[320,100],[300,50],[300,100]]) // mobile sizes
                      .addSize([980, 200], [[336, 280]]) // desktop sizes
                      .build();
              var mapping2 = googletag.sizeMapping()
                      .addSize([0, 0], [[320, 50],[320,100],[300,50],[300,100]]) // mobile sizes
                      .addSize([980, 200], [[970,90],[728,90]]) // desktop sizes, empty array will not request the ad on this device
                      .build();
              var mobile_only = googletag.sizeMapping()
                      .addSize([0, 0], [[320, 50],[320,100],[300,50],[300,100]]) // mobile sizes
                      .addSize([980, 200], []) // desktop sizes, empty array will not request the ad on this device
                      .build(); 
              googletag.defineSlot('${({ theme }) => theme.ads.network}/exame/home', [[336,280]], 'div-home-cabecalho-1-btf-728x90').defineSizeMapping(mapping2).setTargeting(REFRESH_KEY,REFRESH_VALUE).setTargeting('refreshed_slot', 'false').addService(googletag.pubads());
              
              var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;
              googletag.pubads().addEventListener('impressionViewable', function(event) {
              var slot = event.slot;
              if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
                  setTimeout(function() {
                      if (slot.getTargeting('refreshed_slot')) {
                          slot.setTargeting('refreshed_slot', 'true');
                      }
                      googletag.pubads().refresh([slot]);
                      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
                  }
              });
              googletag.pubads().enableLazyLoad({
                  fetchMarginPercent: 200,
                  renderMarginPercent: 200,
                  mobileScaling: 2.0 
              });
              googletag.pubads().setTargeting('session', ['economia']);
              googletag.pubads().setTargeting('tags', ['noticias','dolar','ejemplo1']);
              googletag.pubads().collapseEmptyDivs();
              googletag.pubads().setCentering(true);
              googletag.enableServices(); 
            });
            `
        }}
        />
      </Head>
      <Header />
      <NewsMainPageContainer posts={posts} sliderPosts={sliderPosts} />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const resPost = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?tags_exclude=17`);
  const resSlider = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?per_page=2&?tags=17`);
  const posts = await resPost.json();
  const sliderPosts = await resSlider.json();
  
  return {
    props: {
      posts,
      sliderPosts
    }
  }
}