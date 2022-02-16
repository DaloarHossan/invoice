const newDate= new Date();
const date= newDate.toLocaleDateString();
document.getElementById('show-date').innerText=date;
document.getElementById('details-submit-btn').addEventListener('click',function(){
	const details=document.getElementById('buyer-details-input')
	const detailsValue=details.value;
	
	const buyerInfo=document.getElementById('buyer-info');
	buyerInfo.innerText=detailsValue;
	detailsValue=""
	console.log(detailsValue);
})

document.getElementById('add-details-btn').addEventListener('click',function(){
	const iteamInput=document.getElementById('item-name-input').value;
	const priceInput=document.getElementById('item-price-input').value;
	const quantityInput=document.getElementById('item-quantity-input').value;
	console.log(iteamInput,priceInput,quantityInput)
	const totalIntial=parseFloat(priceInput)*parseFloat(quantityInput);
	
	const table=document.createElement('tr');
	table.innerHTML=`<th>${iteamInput}</th>
	                  <td>${priceInput}</td>
	                  <td>${quantityInput}</td>
					  <td>${totalIntial}</td>
					  `
    const tableBody=document.getElementById('info-table');
	tableBody.appendChild(table);
	const subTotal=document.getElementById('sub-total');
	subTotal.innerText=total;
})


