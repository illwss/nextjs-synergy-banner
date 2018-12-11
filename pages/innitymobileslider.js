import Layout from '../components/InnityLayout.js'
import ContentPage from './content.js'
export default () => (
  <Layout>
    <h1>Page C</h1>
    <p>
      This is the Mobile Slider page
    </p>
    <ContentPage />
    <script dangerouslySetInnerHTML={{__html: `   innity_pcu = 'http://www.innity.com'; innity_domain = 'http://network.innity.com/testscript/mobile/slider/'; `}} />
    <script src='http://network.innity.com/testscript/mobile/slider/scripts/proxy_standard_inline_follow.js'></script>
  </Layout>
)
