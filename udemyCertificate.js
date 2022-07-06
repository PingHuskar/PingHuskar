const udemyCertificates = [
"UC-6f22d773-a08e-49f8-aae6-55767edef763",
"",
    "UC-046faa60-779e-4eaf-98d0-dae7a4218570",
"UC-8fed1cfd-b103-4a18-a115-9987bc3935e6",
"UC-b85b3a2b-1657-4e21-9aef-de7e1ef096c8",
"UC-60ef1bae-94b9-4e23-8e57-9d7bc798d257",
"UC-6ba50843-59de-46a8-b913-225cb1995694",
"UC-855e8e37-178d-49f1-81f8-3caf0e87fbc0",
"UC-01ccdb0a-b843-4201-9319-edf435344e36",
"UC-fc176f68-8f85-4926-973b-fb3b0e2d0da4",
"UC-f37d518a-3489-46d7-bf61-cb81171b9e03",
"UC-9a88059f-3c1a-4736-8efd-c571398c1637",
"UC-2b3cf6be-1a64-4e02-8b74-ac3b43b90cf4",
"UC-288f4d65-aa87-47f3-a61f-d255150dc3a0",
"UC-c4d81b41-f3c0-47f4-a2f3-c78fc39e840b",
"UC-c3a7c50a-a4aa-402e-9c7d-2da6c24b1423",
"UC-6f36130c-3b9e-4c27-a2a3-379f3f338c0c",
"UC-16eda471-4f9b-4160-9359-902e1c0db936",
"UC-2a469b24-1297-4e2a-bcf6-5499ba4211e8",
"UC-4cf12a06-70f9-48f1-b544-5af61e9141fc",
"UC-83267e43-f7f1-44db-9b74-437283f65896",
"UC-4fb437b7-ff0c-46fe-8281-82b0c080b7db",
"UC-54d5d50e-c1ed-490f-9152-233a7a5aeb24",
"UC-2ecf4114-d39d-4dd5-ac18-bfe5e380547c",
"UC-3f1b15e6-785e-4472-86b2-d854035c1522",
"UC-beb5e68b-c22f-4f80-b5fc-74eadbf0046a",
"UC-c081f0c3-cb76-489a-9410-b2f08b1a5d25",
"UC-fde92a2e-dd02-49b2-90c1-334f0fb46145",
"UC-a1ea1f48-21dd-44bc-afb4-040222162886",
"UC-73f3790b-d1e5-4ecf-bac6-53d1bfbf3aca",
"UC-295afb9b-c827-44e1-b241-56f592bd557c",
"UC-73b77355-7b98-4515-9d68-1d9b8c1a77c7",
"UC-9f8563ad-ec5e-4244-8ac6-959202cfcb96",
"UC-b486b989-22e1-4414-ae5f-85e3e6551bd4",
"UC-d08c556b-7540-4cf3-9380-98fe2c0c5e4d",
"UC-b4880d78-435f-4b4d-8649-d3f0a1b8ac15",
"UC-8053e53f-9df7-44ea-a83b-952718a93adf",
"UC-281a587f-a0d3-4871-ab8b-ac8fb9529b6c",
"UC-eb23043b-bb64-4577-9186-44ab3e2f781d",
"UC-0858f11e-b0ca-41a1-9551-108486cd59df",
"UC-621a5518-c498-4cb8-8bdd-d8ff7cd916bf",
"UC-cb2e5b3f-cac4-4f67-bd9d-734ee71d96d8",
"UC-cd453e68-c46d-4498-b4ee-1ec9c89118e3",
"UC-727c3a0f-6348-4998-b68d-3d680c42c5a5",
"UC-c781ec4c-9d52-4069-b278-a6e1249cc41f",
]
// const udemyCertificatesTitle = [
//     "Svelte js Getting Started To the Point Guide",
//     "Complete Git and Github Beginner to Expert",
//     "Java for Beginners - Learn all the Basics of Java",
//     "",
//     "",
//     "",
// ]
var countCertificates = 0
for (var i=0;i<udemyCertificates.length;i++) {
    if (udemyCertificates[i] !== "") {
        countCertificates += 1
    document.getElementById('udemy').innerHTML += `<section data-transition="convex">
    <a href="https://ude.my/${udemyCertificates[i]}" target="_blank">
    <img src="https://udemy-certificate.s3.amazonaws.com/image/${udemyCertificates[i]}.jpg"></a>
    </section>`
    }
}
document.getElementById("countCertificates").innerText = `${countCertificates} links`