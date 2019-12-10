const CATEGORY_LAPTOP = 175672;
const CATEGORY_DESKTOP = 171957;
const CATEGORY_ACCESORIES = 31530;

// TODO: Temporizador para las respuestas.
function setProducto(response){
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(response,"text/xml");
  var titulo = document.getElementById("name_content");
  var imagen = document.getElementById("img_content");
  var precio = document.getElementById("price_content");
  var item = xmlDoc.getElementsByTagName("Item")[0];
  console.log(item);

  //Todo: varias imagenes
  titulo.innerHTML = item.getElementsByTagName("Title")[0].childNodes[0].nodeValue;
  imagen.src = item.getElementsByTagName("PictureURL")[0].childNodes[0].nodeValue;
  precio.innerHTML = item.getElementsByTagName("ConvertedCurrentPrice")[0].childNodes[0].nodeValue + " $";
}

function setIndexItems(response){
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(response,"text/xml");

  var items = xmlDoc.getElementsByTagName("item");
  var productContainer = document.getElementById("products_container")
  for (var i = 0; i < items.length; i++){
    var id = items[i].getElementsByTagName("itemId")[0].childNodes[0].nodeValue;
    var imagen = items[i].getElementsByTagName("galleryURL")[0].childNodes[0].nodeValue;
    var titulo = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var precio = items[i].getElementsByTagName("sellingStatus")[0].getElementsByTagName("currentPrice")[0].childNodes[0].nodeValue;
    productContainer.innerHTML += '<a id="'+ id + '" class="main_product" href="PaginaProducto.html?'+ id +'"\
     style=" text-decoration: none;"><img src="'+ imagen +'"><h3>'+ titulo +'</h3><h4>Precio: '+ precio +'$</h2></a>'
  }
}

function loadProductsIndex(){
  var cat1 = CATEGORY_LAPTOP;
  var cat2 = CATEGORY_DESKTOP;
  var cat3 = CATEGORY_ACCESORIES;
  var numResults = 12;
  // Mas nuevos primero
  var data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<findItemsByCategoryRequest xmlns=\"http://www.ebay.com/marketplace/search/v1/services\">\r\n  <categoryId>" + cat1 + "</categoryId>\r\n  <categoryId>" + cat2 + "</categoryId>\r\n  <categoryId>" + cat3 + "</categoryId>\r\n  <outputSelector>AspectHistogram</outputSelector>\r\n  <paginationInput>\r\n<sortOrder>StartTimeNewest</sortOrder>\r\n    <entriesPerPage>" + numResults + "</entriesPerPage>\r\n  <itemFilter>\r\n    <name>ListingType</name>\r\n    <value>FixedPrice</value>\r\n  </itemFilter>\r\n  </paginationInput>\r\n</findItemsByCategoryRequest>\r\n";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      setIndexItems(this.responseText);
    }
  });

  xhr.open("POST", "https://svcs.ebay.com/services/search/FindingService/v1");
  xhr.setRequestHeader("X-EBAY-SOA-SECURITY-APPNAME", "RubnBuzn-tiendapr-PRD-338876c2a-f34bcefe");
  xhr.setRequestHeader("X-EBAY-SOA-OPERATION-NAME", "findItemsByCategory");
  xhr.setRequestHeader("Content-Type", "text/plain");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "cfd84da4-e2a3-4636-8574-9706fe0e63db,6b13c474-0cfa-4fbc-9eff-ddb8b98bb285");
  xhr.setRequestHeader("Host", "svcs.ebay.com");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Content-Length", "400");
  xhr.setRequestHeader("Cookie", "dp1=bu1p/QEBfX0BAX19AQA**619e6a7b^");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}

function searchPruductKeywords(){
  var keywords = "iphone 8 plus"
  var data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<findItemsByKeywordsRequest xmlns=\"http://www.ebay.com/marketplace/search/v1/services\">\r\n  <keywords>"+ keywords +"</keywords>\r\n  <paginationInput>\r\n    <entriesPerPage>2</entriesPerPage>\r\n  </paginationInput>\r\n</findItemsByKeywordsRequest>";
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://svcs.ebay.com/services/search/FindingService/v1");
  xhr.setRequestHeader("X-EBAY-SOA-SECURITY-APPNAME", "RubnBuzn-tiendapr-PRD-338876c2a-f34bcefe");
  xhr.setRequestHeader("X-EBAY-SOA-OPERATION-NAME", "findItemsByKeywords");
  xhr.setRequestHeader("Content-Type", "text/plain");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "2b53e623-5e9c-48ef-8ab2-cf372602a346,714c5507-f460-4e60-a3a2-10dd67da19e5");
  xhr.setRequestHeader("Host", "svcs.ebay.com");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Content-Length", "272");
  xhr.setRequestHeader("Cookie", "dp1=bu1p/QEBfX0BAX19AQA**619e6a7b^");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}

function searchPruductCategory(){
  var categoryId = CATEGORY_LAPTOP;
  var numResults = 10;
  var data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<findItemsByCategoryRequest xmlns=\"http://www.ebay.com/marketplace/search/v1/services\">\r\n  <categoryId>"+ categoryId +"</categoryId>\r\n  <outputSelector>AspectHistogram</outputSelector>\r\n  <paginationInput>\r\n    <entriesPerPage>"+numResults+"</entriesPerPage>\r\n  </paginationInput>\r\n  <itemFilter>\r\n    <name>ListingType</name>\r\n    <value>FixedPrice</value>\r\n  </itemFilter>\r\n</findItemsByCategoryRequest>\r\n";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://svcs.ebay.com/services/search/FindingService/v1");
  xhr.setRequestHeader("X-EBAY-SOA-SECURITY-APPNAME", "RubnBuzn-tiendapr-PRD-338876c2a-f34bcefe");
  xhr.setRequestHeader("X-EBAY-SOA-OPERATION-NAME", "findItemsByCategory");
  xhr.setRequestHeader("Content-Type", "text/plain");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "4538a53d-beda-4aed-9858-9a32bc442b9d,1ada4967-58a7-40d8-bbf5-d93be08ba382");
  xhr.setRequestHeader("Host", "svcs.ebay.com");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Content-Length", "327");
  xhr.setRequestHeader("Cookie", "dp1=bu1p/QEBfX0BAX19AQA**619e6a7b^");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}


function loadProduct(){
  var itemID = window.location.search.substr(1);
  var data = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<GetSingleItemRequest xmlns=\"urn:ebay:apis:eBLBaseComponents\">\r\n   \t<!-- Enter valid item IDs that exist in the environment \r\n         (Sandbox, Production, etc.) you are using --> \r\n  <ItemID>"+ itemID +"</ItemID>\r\n  <IncludeSelector>Description,ItemSpecifics,ShippingCosts</IncludeSelector>\r\n</GetSingleItemRequest>";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      setProducto(this.responseText);
    }
  });

  xhr.open("POST", "https://open.api.ebay.com/shopping");
  xhr.setRequestHeader("X-EBAY-API-APP-ID", "RubnBuzn-tiendapr-PRD-338876c2a-f34bcefe");
  xhr.setRequestHeader("X-EBAY-API-SITE-ID", "0");
  xhr.setRequestHeader("X-EBAY-API-CALL-NAME", "GetSingleItem");
  xhr.setRequestHeader("X-EBAY-API-VERSION", "863");
  xhr.setRequestHeader("X-EBAY-API-REQUEST-ENCODING", "xml");
  xhr.setRequestHeader("Content-Type", "text/plain");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "2bf15fed-1f79-4024-9565-a893f7d58f52,8e20aac8-8525-4d40-aaff-c3f6dcad3663");
  xhr.setRequestHeader("Host", "open.api.ebay.com");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Content-Length", "357");
  xhr.setRequestHeader("Cookie", "dp1=bu1p/QEBfX0BAX19AQA**619e6a7b^");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);

}
