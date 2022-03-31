function findElement () {
    let val = $("#findElement").val()
    nameOfElement = (data[val - 1].questionAndPoints[1].question).split("'s")[0]
    $("#questionModalLabel").replaceWith(nameOfElement)
}