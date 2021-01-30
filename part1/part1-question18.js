for (cars in statistics){
    if(`${cars}`.startsWith("r") || `${statistics[cars]}`%2 == 1 )
      console.log(`${cars}: ${statistics[cars]}`)
    }