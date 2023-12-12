import { QuartzTransformerPlugin } from "../types"
import { JSResource } from "../../util/resources"
interface Options {
    renderEngine: "katex" | "mathjax"
}
 
export const Scripture: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  return {
    name: "Scripture",
    externalResources() {
        const js: JSResource[] = []
        js.push({
            script: `
            var refTagger = {
                settings: {
                    bibleReader: 'bible.faithlife',
                    bibleVersion: 'ESV',			
                    roundCorners: true,
                    socialSharing: [],
                    tooltipStyle: 'dark',
                    customStyle : {
                        heading: {
                            backgroundColor : '#000000',
                            color : '#FFFFFF'
                        },
                        body   : {
                            color : '#FFFFFF',
                            fontSize: '18px'
                        }
                    }
                }
            };
            (function(d, t) {
                var n=d.querySelector('[nonce]');
                if (n) {
                    refTagger.settings.nonce = n.nonce || n.getAttribute('nonce');
                }
                var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
                g.src = 'https://api.reftagger.com/v2/RefTagger.js';
                g.nonce = refTagger.settings.nonce;
                s.parentNode.insertBefore(g, s);
            }(document, 'script'));
            `,
            loadTime: "afterDOMReady",
            contentType: "inline",
            })
        return {js}
    },
  }
}