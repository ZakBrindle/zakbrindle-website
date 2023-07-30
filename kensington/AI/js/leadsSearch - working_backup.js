

 var sheet_data;
document.getElementById("compNameSearch").addEventListener('change', e => { clearBoxes(1) });
document.getElementById("jobTitleSearch").addEventListener('change', e => { clearBoxes(2) });
document.getElementById("locationSearch").addEventListener('change', e => { clearBoxes(3) });
document.getElementById("consultantSearch").addEventListener('change', e => { clearBoxes(4) });

var resultCount = 0;

function clearBoxes(number)
{
	if(number === 1)
	{
		document.getElementById("jobTitleSearch").value = "";
		document.getElementById("locationSearch").value = "";
		document.getElementById("consultantSearch").value = "";
	}
	else if(number === 2)
	{
		document.getElementById("compNameSearch").value = "";
		document.getElementById("locationSearch").value = "";
		document.getElementById("consultantSearch").value = "";
	}
	else if(number === 3)
	{
		document.getElementById("compNameSearch").value = "";
		document.getElementById("jobTitleSearch").value = "";
		document.getElementById("consultantSearch").value = "";
	}
	else if(number === 4)
	{
		document.getElementById("compNameSearch").value = "";
		document.getElementById("jobTitleSearch").value = "";
		document.getElementById("locationSearch").value = "";
	}
	
}

function searchData()
{
	console.log("do search");
}

function lookForField(tableData, row)
{
	if(document.getElementById("compNameSearch").value === "" && document.getElementById("jobTitleSearch").value === "" && document.getElementById("locationSearch").value === "" && document.getElementById("consultantSearch").value === "")
	{
		return true;
	}
		
	
	if(document.getElementById("compNameSearch").value != "" && tableData[row][2] != null)
	{
	//check if Company is equal to company search
	if(tableData[row][2] === document.getElementById("compNameSearch").value)
	{
		return true;
	}
	}
	
	
	//check if Job Title is equal to title search
	if(document.getElementById("jobTitleSearch").value != "" && tableData[row][1] != null)
	{
	let data = tableData[row][1];
	let searchData = document.getElementById("jobTitleSearch").value;
	if(data.includes(searchData))
	{
		return true;
	}
	}
	
	
if(document.getElementById("locationSearch").value != "" && tableData[row][4] != null)
	{
	//check if Location is equal to location search
	if(tableData[row][4] === document.getElementById("locationSearch").value)
	{
		return true;
	}
	}
	
	//check if consultant is equal to cons search
	if(document.getElementById("consultantSearch").value != "" && tableData[row][5] != null)
	{	
	if(tableData[row][5] === document.getElementById("consultantSearch").value)
	{
		return true;
	}
	}
	
	
	return false;
}

const excel_file = document.getElementById('excel_file');

excel_file.addEventListener('change', (event) => {

    if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
    {
        document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';

        excel_file.value = '';

        return false;
    }
	


    var reader = new FileReader();
    reader.readAsArrayBuffer(event.target.files[0]);
    reader.onload = function(event){

        var data = new Uint8Array(reader.result);
        var work_book = XLSX.read(data, {type:'array'});
        var sheet_name = work_book.SheetNames;
		
		var table_output = '';
		document.getElementById('excel_data').innerHTML = table_output;
		resultCount = 0;
		
        stripDataIntoTableInitial(work_book, sheet_name);		
		stripDataIntoTable(work_book, sheet_name);		
		stripDataIntoTableLast(work_book, sheet_name);				

        excel_file.value = '';
    }

});




function stripDataIntoTableInitial(work_book, sheet_name)
{
	sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});
		
		console.log(sheet_data);
			

        if(sheet_data.length > 0)
        {
            table_output = '<table class="table table-striped table-bordered">';

            for(var row = 0; row < sheet_data.length; row++)
            {
				
				if(lookForField(sheet_data, row))
				{
					console.log("found what you was looking for");			

					table_output += '<tr>';

					for(var cell = 1; cell < sheet_data[row].length; cell++)	// Cell (collumn) = 1 (skip the first collumn)
					{		
						if(row == 0)
						{
							// This row (row 0) is headings - using th for table headers.
							table_output += '<th>'+sheet_data[row][cell]+'</th>';				
						}
						else
						{
							table_output += '<td>'+sheet_data[row][cell]+'</td>';
							resultCount += 1;
						}
					}
                table_output += '</tr>';
				}
				else
				{
					if(row == 0)
					{
						//not found what we want, but is it first row? Lets display the headings regardless
						table_output += '<tr>';

						for(var cell = 1; cell < sheet_data[row].length; cell++)	// Cell (collumn) = 1 (skip the first collumn)
						{		
                    
						// This row (row 0) is headings - using th for table headers.						
                        table_output += '<th>'+sheet_data[row][cell]+'</th>';							
                                    
						}
						table_output += '</tr>';
					} 
				}
            }

            //table_output += '</table>';

            //document.getElementById('excel_data').innerHTML = table_output;
        }
}

function stripDataIntoTable(work_book, sheet_name)
{
	for(var i = 1; i < 21; i++)
	{
	
	
	// search all sheets but initual (0) and last sheet		
		sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[i]], {header:1});
	

		//stripDataIntoTable();	

        if(sheet_data.length > 0)
        {
           // var table_output = '<table class="table table-striped table-bordered">';

            for(var row = 1; row < sheet_data.length; row++)
            {
				
		if(lookForField(sheet_data, row))
		{
				console.log("found what you was looking for");
			

                table_output += '<tr>';

                for(var cell = 1; cell < sheet_data[row].length; cell++)	// Cell (collumn) = 1 (skip the first collumn)
                {		
                    if(row == 0)
                    {
						// This row (row 0) is headings - using th for table headers.
						// table_output += '<th>'+sheet_data[row][cell]+'</th>';				
                    }
                    else
                    {
                        table_output += '<td>'+sheet_data[row][cell]+'</td>';
						resultCount += 1;
                    }
                }

                table_output += '</tr>';
		}
            }           
        }
	}
}

function stripDataIntoTableLast(work_book, sheet_name)
{
	// search second sheet		
		sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[2]], {header:1});
	

		//stripDataIntoTable();	

        if(sheet_data.length > 0)
        {
           // var table_output = '<table class="table table-striped table-bordered">';

            for(var row = 1; row < sheet_data.length; row++)
            {
				
		if(lookForField(sheet_data, row))
		{
				console.log("found what you was looking for");
			

                table_output += '<tr>';

                for(var cell = 1; cell < sheet_data[row].length; cell++)	// Cell (collumn) = 1 (skip the first collumn)
                {		
                    if(row == 0)
                    {
						// This row (row 0) is headings - using th for table headers.
						// table_output += '<th>'+sheet_data[row][cell]+'</th>';				
                    }
                    else
                    {
                        table_output += '<td>'+sheet_data[row][cell]+'</td>';
						resultCount += 1;
                    }
                }

                table_output += '</tr>';
		}
            }

            table_output += '</table>';

            document.getElementById('excel_data').innerHTML += table_output;
			document.getElementById('excel_stats').innerHTML = "Total Items: " + resultCount;
        }
}