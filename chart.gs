//Todo o codigo foi retirado da propria documentação do google.
//Poderiamos no lugar de data.addRows do proprio modelo,
//colocar os dados da sheet acessados atraves da classe SpreadsheetApp. 


google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
      const data = new google.visualization.DataTable();
      data.addColumn('Vendedor', 'Vendas');

      /*data.addRows([
        [{v: [8, 0, 0], f: '8 am'},   1, '1',  .25, '.2'],
        [{v: [9, 0, 0], f: '9 am'},   2, '2',   .5, '.5'],
        [{v: [10, 0, 0], f:'10 am'},  3, '3',    1,  '1'],
        [{v: [11, 0, 0], f: '11 am'}, 4, '4', 2.25,  '2'],
        [{v: [12, 0, 0], f: '12 pm'}, 5, '5', 2.25,  '2'],
        [{v: [13, 0, 0], f: '1 pm'},  6, '6',    3,  '3'],
        [{v: [14, 0, 0], f: '2 pm'},  7, '7', 3.25,  '3'],
        [{v: [15, 0, 0], f: '3 pm'},  8, '8',    5,  '5'],
        [{v: [16, 0, 0], f: '4 pm'},  9, '9',  6.5,  '6'],
        [{v: [17, 0, 0], f: '5 pm'}, 10, '10',  10, '10'],
      ]);*/
      
      const ss = SpreadsheetApp.openByUrl(url);
      const ws = ss.getSheetByName("vendas");
      data.addRows(ws.getRange("A1:B12").getValues());

      let options = {
        title: 'Titulo',
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 14,
            color: '#000',
            auraColor: 'none'
          }
        },
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      let chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
