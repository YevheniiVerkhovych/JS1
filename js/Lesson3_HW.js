var
mass = [-1,-2,-3,0,1,2,5,8,12,0,22,-8,6,0]
,
rez1 = " "
,n = 0
,min = mass[0]
,rez2 = " "
;
for (i=0; i < mass.length; i++) {
	if (!mass[i]%2==0 &&  mass[i]<=10 && mass[i]>=-1) {rez1=rez1+" "+String(mass[i]);} // digitals output in required range (-1 to 10)

	mass[i]==0?n++:n=n; // Amount of 0

	min>mass[i]?min=mass[i]:min=min; //min element of the mass

	if (mass[i]>=0 && i%2==0)  {rez2=rez2+" "+String(mass[i]);} // digitals output with even indices and has a positive value
}
console.log("Original mass is:"+mass.join(" ")); 
console.log("Digitals output in required range (-1 to 10): "+rez1);
console.log("Amount of 0: "+n);
console.log("Min element of the mass: "+min);
console.log("Digitals output with even indices and has a positive value: "+rez2);

for (i=1; i < mass.length; i+=2) {           //Array with pairwise rearranged numbers
n=mass[i-1]; mass[i-1]=mass[i]; mass[i]=n;
}
console.log("Array with pairwise rearranged numbers: "+mass.join(" "));

	

