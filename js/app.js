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

	const totalIntial=parseFloat(priceInput)*parseFloat(quantityInput);
	
	const table=document.createElement('tr');
	table.innerHTML=`<th>${iteamInput}</th>
	                  <td>${priceInput}</td>
	                  <td>${quantityInput}</td>
					  <td class="total">${parseFloat(totalIntial)}</td>
					  `
    const tableBody=document.getElementById('info-table');
	tableBody.appendChild(table);
	const subToTal=document.getElementById('sub-total');
	const sub=calSubTotal();
    subToTal.innerText=sub;
	const taxValue=document.getElementById('tax');
	const tax=sub*.2;
	taxValue.innerText=tax.toFixed(2);
	const grandTotal=document.getElementById('grand-total');
	const FinalTotal=document.getElementById('grand-total-2');
	const grand=sub+tax;
	grandTotal.innerText=grand;
	FinalTotal.innerText=grand;
})

function calSubTotal(){
	let subtotal=0;
	const totalprice=document.getElementsByClassName('total');
	
	for(i=0;i<totalprice.length;i++){
		const element=totalprice[i];
		const price=parseFloat(element.innerText);
		subtotal=subtotal+price;
	}

	return subtotal;
	
}

