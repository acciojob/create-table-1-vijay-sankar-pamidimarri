function insert_Row() {
    //Write your code here
 let li=document.querySelector("#sampleTable");
	
 let len=document.getElementsByTagName("tr").length+1;
 let v=document.createElement("tr");
 let v1=document.createElement("td")
	v1.textContent="Row"+len+"cell1";
 let v2=document.createElement("td");
	v2.textContent="Row"+len+"cell2";
 v.append(v1,v2);
 li.append(v);
  
}
