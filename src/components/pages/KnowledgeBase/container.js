import {connect} from 'react-redux';
import page from './page'

function mapStateToProps() {
  return {kbArticles};
}

export default connect(mapStateToProps)(page);

const kbArticles = [
  {
    id: 'article-1',
    title: 'Article 1',
    sections: [
      {
        title: 'Section 1',
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
        title: 'Section 2',
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
        title: 'Section 3',
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
    id: 'article-2',
    title: 'Article 2',
    sections: [
      {
        title: 'Section 1',
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
        title: 'Section 2',
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
        title: 'Section 3',
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
    id: 'article-3',
    title: 'Article 3',
    sections: [
      {
        title: 'Section 1',
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
        title: 'Section 2',
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