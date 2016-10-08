suite('Global Tests', function(){
  test('page has a valid title', function(){
    assert(document.title && document.title.match(/\S/) &&
      document.title.toUpperCase() !== 'TODO');
  });
});
//BDD行为驱动开发 TDD测试驱动开发