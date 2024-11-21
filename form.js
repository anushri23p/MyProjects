function checkMaleOrfemale(gender) {
  if (gender === 1) {
    return "Male";
  } else if (gender === 2) {
    return "Female";
  } else {
    return "";
  }
}

function printMarriedInfo(name, age, gender, mobNumber, husband) {
  const maleOrfemale = checkMaleOrfemale(gender);

  console.log("\n\n*******************", name, "'s Information *******************");
  console.log("\n---------------------------------------------------------------");
  console.log(" Name : ", name);

  if (maleOrfemale === "Male") {
    console.log("Wife Name : ", husband);
  } else {
    console.log("Husband Name : ", husband);
  }
  
  console.log(" Age : ", age);
  console.log(" Gender : ", maleOrfemale);
  console.log(" Mobile Number : ", mobNumber);
  console.log("---------------------------------------------------------------");

}


function printInfo(Name, age, gender, mobNumber, fatherName, motherName) {
  const maleOrfemale = checkMaleOrfemale(gender);

  console.log("\n\n*******************", Name, "'s Information *******************");
  console.log("\n---------------------------------------------------------------");
  console.log(" Name : ", Name);
  console.log("Father Name : ", fatherName);
  console.log("Mother Name : ", motherName);
  console.log(" Age : ", age);
  console.log(" Gender : ", maleOrfemale);
  console.log(" Mobile Number : ", mobNumber);
  console.log("---------------------------------------------------------------");
}

function takeInfo() {
  const Name = prompt("Enter your Name :");
  const age = +prompt("Enter your age :");
  const gender = +prompt("select Gender : \n1. Male 👦🏻 \n2. Female 👩🏻 \n Enter choice according to number : ");
  const mobNumber = +prompt("Enter your 10 digit mobile Number :");
  const isMarried = confirm("Are you Married ?");

  if (isMarried) {
    if (gender === 1) {
      const wife = prompt("Enter Your wife Name :");

      return printMarriedInfo(Name, age, gender, mobNumber, wife);
    }
    if (gender === 2) {
      const husband = prompt("Enter your husband :");

      return printMarriedInfo(Name, age, gender, mobNumber, husband);
    }
  }

  const fatherName = prompt("Enter your father name :");
  const motherName = prompt("Enter your mother name :");

  return printInfo(Name, age, gender, mobNumber, fatherName, motherName);
}

takeInfo();
