var elements = [
    {tag: 'input',text: '姓   名: ',attr: {type: 'text',name:'user'}},
    {tag: 'input',text: '学   号: ',attr: {type: 'text',name:'sid'}},
    {tag: 'input',text: '班   级: ',attr: {type: 'text',name:'classid'}},
    {tag: 'input',text: '性   别: ',attr: {type: 'radio',name:'gender'},
    option:{m: '男',w: '女'}},
    {tag: 'input',text: '爱   好：',attr: {type: 'checkbox',name: 'hobby[]'},

    option:{swimming: '打电脑',reading: '读书',running:'运动'}},
    {tag: 'select',text: '地  址:',attr: {name: 'area'},

    option:{'':'--请选择--',bj: '广东',sh:'四川',sz:'重庆'}},
    {tag: 'textarea',text: '自我介绍:',

    attr:{name: 'introduce',clos:'50',rows: '5'}},
    {tag: 'input',attr:{type: 'submit',value: '提交'}}
];
document.getElementById('form').innerHTML = new FormBuilder(elements).create();