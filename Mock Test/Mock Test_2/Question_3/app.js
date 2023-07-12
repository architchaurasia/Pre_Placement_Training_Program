function createSkeletonLoader() {
    var skeletonLoaderContainer = document.createElement("div");
    skeletonLoaderContainer.classList.add("skeleton-loader");
    
    for (var i = 0; i < 5; i++) {
      var skeletonLoader = document.createElement("div");
      skeletonLoader.classList.add("skeleton-loader");
      skeletonLoaderContainer.appendChild(skeletonLoader);
    }
    
    return skeletonLoaderContainer;
  }

  function fetchData() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    
    var dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = "";
    dataContainer.appendChild(createSkeletonLoader());
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dataContainer.innerHTML = "";
        
        data.forEach(post => {
          var title = post.title;
          var body = post.body;
          
          var postContainer = document.createElement("div");
          var titleElement = document.createElement("h2");
          var bodyElement = document.createElement("p");
          
          titleElement.textContent = title;
          bodyElement.textContent = body;
          
          postContainer.appendChild(titleElement);
          postContainer.appendChild(bodyElement);
          
          dataContainer.appendChild(postContainer);
        });
      })
      .catch(error => {
        dataContainer.innerHTML = "Error fetching data.";
        console.error(error);
      });
  }
  
  fetchData();