var togNum = 1;
var togNum1 = 1;
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTA0sYVEpeavusV8KKN5NmbdrptBSvKhGnTZ36S2pe9AQJvaFFxHnrhjqL-SVkDa5jrUCJRERyLDvPs/pub?gid=1905050396&single=true&output=csv", function (data) {

                //chart 3 
                
                var svg3 = dimple.newSvg("#Chart3", "100%", 400);
        
                //whichChart tells program which chart is displayed for change purposes
                //1 = grad
                //2 = employment rates
                //3 = retention
                //4 = average earnings
                //5 = intercollege transfer
        
                var whichChart = 1;
                var chartCheck;
               
                            
        
                            gradData = dimple.filterData(data, "Measure", "Graduation Rate");
        
                            empData = dimple.filterData(data, "Measure", "Employment Rate");
        
                            retData = dimple.filterData(data, "Measure", "Retention");
        
                            EarnData = dimple.filterData(data, "Measure", "Earnings");
        
                            transData = dimple.filterData(data, "Measure", "Inter-college Transfer Rate (Including dual enroll and online enroll)");
        
        

                            

                        
        
                            var wChart = new dimple.chart(svg3, gradData);
                            wChart.setBounds("11%", "12%", "85%", "65%")
                            var edX = wChart.addCategoryAxis("x", ["Year", "College"]);
                            var eduY = wChart.addMeasureAxis("y", "Value");
                           var edSeries = wChart.addSeries("Program", dimple.plot.bar);
                            eduY.title = "Graduation Rates";
                            edX.title = " ";
        
                            edX.addOrderRule("College A", "College B", "College C");
        
                            var qLegend = wChart.addLegend("65%", "5%", "40%", "95%");
                            
        
                       //     edX.addOrderRule(["Less than high school graduate", "High school graduate (includes equivalency)", "Some college or associate's degree", "Bachelor's degree or higher"]);
                     // var edLegend = wChart.addLegend("0%", "83%", "50%", "70%", "right");
        
                            //edSeries.lineWeight = 0;
                            eduY.tickFormat = '%.2f';
                            
                            wChart.draw();
        
d3.select("#btn3").on("change", function() {
  
  
	buttonClick1();
   
 });                             
        
d3.select("#btn4").on("change", function() {
  
  
	buttonClick2();
   
 });
        
d3.select("#change1").on("click", function() {
        whichChart = 1;
        wChart.data = gradData;
        eduY.title = "Graduation Rates";
        eduY.tickFormat = '%.2f';
        buttonClick1();
        wChart.draw(1000);
    });
        
d3.select("#change2").on("click", function() {
        whichChart = 2;
        wChart.data = empData;
        eduY.title = "Employment Rates";
        eduY.tickFormat = '%.2f';
        buttonClick1();
        wChart.draw(1000);
    });
        
d3.select("#change3").on("click", function() {
        whichChart = 3;
        wChart.data = retData;
        eduY.title = "Retention Rates";
        eduY.tickFormat = '%.2f';
        buttonClick1();
        wChart.draw(1000);
    });
        
d3.select("#change4").on("click", function() {
        whichChart = 4;
        wChart.data = EarnData;
        eduY.title = "Average Earnings";
        eduY.tickFormat = '$,f';
        buttonClick1();
        wChart.draw(1000);
        wChart.draw(1000);
    });
        
d3.select("#change5").on("click", function() {
        whichChart = 5;
        wChart.data = transData;
        eduY.title = "Inter-college Transfer Rates";
        eduY.tickFormat = '%.2f';
        buttonClick1();
        wChart.draw(1000);
    });
        
                      
  function whichCheck(){
      if(whichChart == 1){
         var chartCheck = gradData;
      }
      
      if(whichChart == 2){
          var chartCheck = empData;
      }
      
      if(whichChart == 3){
          var chartCheck = retData;
      }
      
      if(whichChart == 4){
          var chartCheck = EarnData;
      }
      
      if(whichChart == 5){
          var chartCheck = transData;
      }
      
      return chartCheck;
      
      
  }
        
  function buttonClick1(){
      
      var e3 = document.getElementById("btn3");
  var strUser3 = e3.options[e3.selectedIndex].value;
      
      var e4 = document.getElementById("btn4");
  var strUser4 = e4.options[e4.selectedIndex].value;
    
  
   var chartChange = dimple.filterData(whichCheck(), "College", strUser3);
    
    wChart.data = chartChange;
    
    if(strUser4 == "All Programs" && strUser3 == "All Colleges"){
        wChart.data = whichCheck();
    }
      
      if(strUser4 != "All Programs"){
        var chartChange1 = dimple.filterData(chartChange, "Program", strUser4);
        wChart.data = chartChange1;
    }
      
    if(strUser4 != "All Programs" && strUser3 == "All Colleges"){
        buttonClick2();
    }
      
       wChart.draw(1000);
      
  }
        
  function buttonClick2(){
      
      var e3 = document.getElementById("btn3");
  var strUser3 = e3.options[e3.selectedIndex].value;
      
      var e4 = document.getElementById("btn4");
  var strUser4 = e4.options[e4.selectedIndex].value;
    
  
   var chartChange = dimple.filterData(whichCheck(), "Program", strUser4);
    
    wChart.data = chartChange;
    
    if(strUser4 == "All Programs" && strUser3 == "All Colleges"){
        wChart.data = whichCheck();
    }
      
    if(strUser3 != "All Colleges"){
        var chartChange1 = dimple.filterData(chartChange, "College", strUser3);
        wChart.data = chartChange1;
    }
      
    if(strUser3 != "All Colleges" && strUser4 == "All Programs"){
        buttonClick1();
    }
        
     wChart.draw(1000);
     
  }
        
                           

                           
window.drawAll = function(){
                 
                                wChart.draw(0, true);
                                
                            }; 
        
         window.onresize = function () {
                      
                        drawAll();
                    };
        
    });

function collapse1() {
        document.getElementById("Collapse2").style.display="inline";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="none";
        
        
        drawAll();
        
    }

function collapse2() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="inline";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="none";
        
        
        drawAll();
        
    }

function collapse3() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="inline";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="none";
        
        
        drawAll();
        
    }

function collapse4() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="inline";
        document.getElementById("Collapse6").style.display="none";
        
        
        drawAll();
        
    }

function collapse5() {
        document.getElementById("Collapse2").style.display="none";
        document.getElementById("Collapse3").style.display="none";
        document.getElementById("Collapse4").style.display="none";
        document.getElementById("Collapse5").style.display="none";
        document.getElementById("Collapse6").style.display="inline";
        
        
        drawAll();
        
    }