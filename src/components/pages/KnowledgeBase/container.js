import {connect} from 'react-redux';
import page from './page'

function mapStateToProps() {

  const articles = kbArticles.map((article, articleNum) => {
    const articleId = `article-${articleNum + 1}`
    return {
      ...article,
      id: articleId,
      sections: article.sections.map((section, sectionNum) => {
        const sectionId = `${articleId}-section-${sectionNum + 1}`
        return {
          ...section,
          id: sectionId
        }
      })
    }
  })

  return {articles};
}

export default connect(mapStateToProps)(page);

const kbArticles = [
  {
    title: 'Relayer Strategies',
    sections: [
      {
        title: 'Contract Descriptions',
        content: '<p>This is the simplest and most obvious strategy a relayer can use. The relayer accepts and broadcasts orders where the <code>taker</code> field is equal to <code>0x0000000000000000000000000000000000000000</code>. Any trader with access to all of an order\'s parameters is able to fill the order by signing a transaction locally and sending it to an Ethereum node.</p><h5>Example</h5><p>Alice submits orderA to sell 1 WETH in exchange for 1000 ZRX to relayer Charlie. Bob sees the order on Charlie\'s orderbook and calls fillOrder(orderA, 1000) using his own local node. Bob\'s 1000 ZRX are exchanged for Alice\'s 1 WETH.</p><h5>Rationale</h5><p>This is arguably the cheapest and most trustless strategy to implement. In addition, orders on an open orderbook are easily accessible to third parties. This comes with numerous benefits, including:<ul><li>Orders are able to be shared across relayers.</li><li>External dApps can use these orders for liquidity.</li><li>External smart contracts can use these orders for liquidity.</li></ul></p><h5>Limitations</h5><p>As trading throughput increases, it becomes increasingly likely that multiple traders will attempt to fill the same order (either intentionally or accidentally). This strategy benefits the most from the ability of relayers and traders to quickly and reliably monitor the pending transaction pool.</p><img src="https://s3.eu-west-2.amazonaws.com/0x-wiki-images/trade_execution.png"/>',
        sampleCode: '// Parenthesize the body to return an object literal expression:\n' +
        'params => ({foo: bar})\n' +
        '\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      },
      {
        title: 'Verifying Custom Tokens',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus hic quasi soluta. Aliquam asperiores at deleniti dicta eligendi omnis unde vitae. Alias animi eum mollitia quaerat quidem ratione repellat vitae! Accusamus ad cum distinctio dolore eum ipsum itaque mollitia, nam nobis quas, quisquam rem reprehenderit, vel? Animi aperiam deleniti error illo iste temporibus voluptas. Ad autem dignissimos distinctio eaque eos est, exercitationem facere fugit id, in inventore magnam minima mollitia necessitatibus nihil nobis odit pariatur perspiciatis quis quo rem sed vero voluptas voluptate voluptatum. Ad aperiam architecto atque consectetur consequatur corporis cupiditate eveniet ex harum illum impedit, labore maiores molestias mollitia natus nisi optio quasi repudiandae sapiente sequi sit tempore, veritatis vero. Incidunt molestias nemo possimus quas reiciendis sed!',
        sampleCode: '// Parenthesize the body to return an object literal expression: params => ({foo: bar}) // Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      },
      {
        title: 'Matching',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus hic quasi soluta. Aliquam asperiores at deleniti dicta eligendi omnis unde vitae. Alias animi eum mollitia quaerat quidem ratione repellat vitae! Accusamus ad cum distinctio dolore eum ipsum itaque mollitia, nam nobis quas, quisquam rem reprehenderit, vel? Animi aperiam deleniti error illo iste temporibus voluptas. Ad autem dignissimos distinctio eaque eos est, exercitationem facere fugit id, in inventore magnam minima mollitia necessitatibus nihil nobis odit pariatur perspiciatis quis quo rem sed vero voluptas voluptate voluptatum. Ad aperiam architecto atque consectetur consequatur corporis cupiditate eveniet ex harum illum impedit, labore maiores molestias mollitia natus nisi optio quasi repudiandae sapiente sequi sit tempore, veritatis vero. Incidunt molestias nemo possimus quas reiciendis sed!',
        sampleCode: '// Parenthesize the body to return an object literal expression:\n' +
        'params => ({foo: bar})\n' +
        '\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      }
    ]
  },
  {
    title: 'Protocol',
    sections: [
      {
        title: 'Open Orderbook',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus hic quasi soluta. Aliquam asperiores at deleniti dicta eligendi omnis unde vitae. Alias animi eum mollitia quaerat quidem ratione repellat vitae! Accusamus ad cum distinctio dolore eum ipsum itaque mollitia, nam nobis quas, quisquam rem reprehenderit, vel? Animi aperiam deleniti error illo iste temporibus voluptas. Ad autem dignissimos distinctio eaque eos est, exercitationem facere fugit id, in inventore magnam minima mollitia necessitatibus nihil nobis odit pariatur perspiciatis quis quo rem sed vero voluptas voluptate voluptatum. Ad aperiam architecto atque consectetur consequatur corporis cupiditate eveniet ex harum illum impedit, labore maiores molestias mollitia natus nisi optio quasi repudiandae sapiente sequi sit tempore, veritatis vero. Incidunt molestias nemo possimus quas reiciendis sed!',
        sampleCode: '// Parenthesize the body to return an object literal expression:\n' +
        'params => ({foo: bar})\n' +
        '\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      },
      {
        title: 'Reserve Manager',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus hic quasi soluta. Aliquam asperiores at deleniti dicta eligendi omnis unde vitae. Alias animi eum mollitia quaerat quidem ratione repellat vitae! Accusamus ad cum distinctio dolore eum ipsum itaque mollitia, nam nobis quas, quisquam rem reprehenderit, vel? Animi aperiam deleniti error illo iste temporibus voluptas. Ad autem dignissimos distinctio eaque eos est, exercitationem facere fugit id, in inventore magnam minima mollitia necessitatibus nihil nobis odit pariatur perspiciatis quis quo rem sed vero voluptas voluptate voluptatum. Ad aperiam architecto atque consectetur consequatur corporis cupiditate eveniet ex harum illum impedit, labore maiores molestias mollitia natus nisi optio quasi repudiandae sapiente sequi sit tempore, veritatis vero. Incidunt molestias nemo possimus quas reiciendis sed!',
        sampleCode: '// Parenthesize the body to return an object literal expression:\n' +
        'params => ({foo: bar})\n' +
        '\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      },
      {
        title: 'Contract Interactions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus hic quasi soluta. Aliquam asperiores at deleniti dicta eligendi omnis unde vitae. Alias animi eum mollitia quaerat quidem ratione repellat vitae! Accusamus ad cum distinctio dolore eum ipsum itaque mollitia, nam nobis quas, quisquam rem reprehenderit, vel? Animi aperiam deleniti error illo iste temporibus voluptas. Ad autem dignissimos distinctio eaque eos est, exercitationem facere fugit id, in inventore magnam minima mollitia necessitatibus nihil nobis odit pariatur perspiciatis quis quo rem sed vero voluptas voluptate voluptatum. Ad aperiam architecto atque consectetur consequatur corporis cupiditate eveniet ex harum illum impedit, labore maiores molestias mollitia natus nisi optio quasi repudiandae sapiente sequi sit tempore, veritatis vero. Incidunt molestias nemo possimus quas reiciendis sed!',
        sampleCode: '// Parenthesize the body to return an object literal expression:\n' +
        'params => ({foo: bar})\n' +
        '\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      }
    ]
  },
  {
    title: 'Smart Contracts',
    sections: [
      {
        title: 'List Of Projects Using 0x Protocol',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus hic quasi soluta. Aliquam asperiores at deleniti dicta eligendi omnis unde vitae. Alias animi eum mollitia quaerat quidem ratione repellat vitae! Accusamus ad cum distinctio dolore eum ipsum itaque mollitia, nam nobis quas, quisquam rem reprehenderit, vel? Animi aperiam deleniti error illo iste temporibus voluptas. Ad autem dignissimos distinctio eaque eos est, exercitationem facere fugit id, in inventore magnam minima mollitia necessitatibus nihil nobis odit pariatur perspiciatis quis quo rem sed vero voluptas voluptate voluptatum. Ad aperiam architecto atque consectetur consequatur corporis cupiditate eveniet ex harum illum impedit, labore maiores molestias mollitia natus nisi optio quasi repudiandae sapiente sequi sit tempore, veritatis vero. Incidunt molestias nemo possimus quas reiciendis sed!',
        sampleCode: '// Parenthesize the body to return an object literal expression:\n' +
        'params => ({foo: bar})\n' +
        '\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      },
      {
        title: 'Order Book Pruning',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus hic quasi soluta. Aliquam asperiores at deleniti dicta eligendi omnis unde vitae. Alias animi eum mollitia quaerat quidem ratione repellat vitae! Accusamus ad cum distinctio dolore eum ipsum itaque mollitia, nam nobis quas, quisquam rem reprehenderit, vel? Animi aperiam deleniti error illo iste temporibus voluptas. Ad autem dignissimos distinctio eaque eos est, exercitationem facere fugit id, in inventore magnam minima mollitia necessitatibus nihil nobis odit pariatur perspiciatis quis quo rem sed vero voluptas voluptate voluptatum. Ad aperiam architecto atque consectetur consequatur corporis cupiditate eveniet ex harum illum impedit, labore maiores molestias mollitia natus nisi optio quasi repudiandae sapiente sequi sit tempore, veritatis vero. Incidunt molestias nemo possimus quas reiciendis sed!',
        sampleCode: '// Parenthesize the body to return an object literal expression:\n' +
        'params => ({foo: bar})\n' +
        '\n' +
        '// Rest parameters and default parameters are supported\n' +
        '(param1, param2, ...rest) => { statements }\n' +
        '(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }\n' +
        '\n' +
        '// Destructuring within the parameter list is also supported\n' +
        'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;\n' +
        'f();  // 6'
      }
    ]
  }
]