angular.module('chh', ['chh.controllers', 'chh.directives', 'chh.factories']);

/* Controllers */
angular.module('chh.controllers', []).

controller('stuffCtrl', function($scope, $http, stuff) {
  preloadImage(stuff, function(image) {
    $http({
      method: 'GET',
      url: '/images/' + image,
      headers: {'Accept': 'image/webp,*/*;q=0.8'}, cache: true});
  });
  $scope.stuffes = stuff;
})

/* Directives */
angular.module('chh.directives', []).

directive('tagsFormatter', function($compile) {
  return {
    scope: {
      tags: '='
    },
    restrict: 'C',
    link: function(scope, element, attrs) {
      var template ='<ul><li ng-repeat="tag in tags">{{tag}}</li></ul>';
      var newElement = angular.element(template);
      $compile(newElement)(scope);
      element.append(newElement);
    }
  }
}).

directive('changeImage', [function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function(event) {
        event.preventDefault();
        $(attrs.changeImage).find('img')[0].src = '/images/' + scope.img;
      });
    }
  };
}]).

directive('activeImage', [function(){
  return {
    restrict: 'C',
    link: function(scope, elem, attrs) {
      elem.bind('click', function(event) {
        event.preventDefault();
        removeActive(elem);

        var findTarget = $(attrs.changeImage).find('img')[0];
        var getTargetName = findTarget.attributes.src.nodeValue;
        if (getTargetName == '/images/' + scope.img) {
          elem[0].className += " active"
        }
      })
    }
  };
}]);

/* Factories */
angular.module('chh.factories', []).

factory('stuff', function() {
  return [
    // 圖片尺寸 470 x 380
    {
      name: 'WebTools',
      id: 'webtools',
      url: 'http://webtools.chh.tw',
      images: ['webtools-1.png', 'webtools-2.png', 'webtools-3.png'],
      description: '蒐集各種有關 Web 設計、開發與專案管理的工具與資源的網站。',
      tags: ['html5', 'compass', 'nodejs', 'javascript', 'angularjs', 'mongodb']
    },
    {
      name: 'Twinkle',
      id: 'twinkle',
      url: 'http://twinkle.chh.tw',
      images: ['twinkle-1.png', 'twinkle-2.png', 'twinkle-3.png', 'twinkle-4.png'],
      description: '一個實驗性的部落格系統，目的是建立更友善、更容易架設的環境，讓寫作可以更簡單。No more server, no more database.',
      tags: ['html5', 'compass', 'ruby', 'javascript', 'jquery', 'angularjs']
    },
    {
      name: "Use Sublime Text",
      id: "use-sublime-text",
      url: "http://use.sublimetext.tw",
      images: ["use-sublimetext-tw-1.png", "use-sublimetext-tw-2.png", "use-sublimetext-tw-3.png" ],
      description: "專門分享 Sublime Text 編輯器使用技巧的網誌，佈景主題模擬 Sublime Text 本身的外觀。",
      tags: ['html5', 'compass']
    },
    {
      name: "Sublime Text 手冊",
      id: "docs-sublime-text",
      url: "http://docs.sublimetext.tw",
      images: ["docs-sublimetext-tw-1.png", "docs-sublimetext-tw-2.png", "docs-sublimetext-tw-3.png"],
      description: "2013 年最熱門的程式編輯器 Sublime Text 的中文手冊。",
      tags: ['html5', 'compass']
    },
    {
      name: "Dropbot Theme",
      id: "dropbot-theme",
      url: "http://blog.chh.tw",
      images: ["blog-chh-tw-1.png", "blog-chh-tw-2.png", "blog-chh-tw-3.png"],
      description: "一套 Octopress 的佈景主題，更適合中文排版，以及更專注於內容。",
      tags: ['html5', 'compass']
    }
  ]
})

// private

function preloadImage(stuff, callback) {
  stuff.forEach(function(item) {
    item.images.forEach(function(image) {
      callback.call(self, image);
    })
  })
}

function removeActive(e) {
  $(e).siblings().each(function(index, item) {
    $(item).removeClass('active');
  })
}
