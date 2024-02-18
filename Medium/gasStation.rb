gas = [1,2,3,4,5]
cost = [3,4,5,1,2]


def can_complete_circuit(gas, cost)
  stations = gas.size
  arrIndex = 0
  tanque = 0
  total = 0

      for i in 0...stations
      tanque += gas[i] - cost[i];

      if tanque < 0
          tanque = 0
          arrIndex = i+1;


      end
      total += gas[i] - cost[i]

      end

      puts total < 0 ? -1 : arrIndex

  end

  can_complete_circuit(gas, cost)
