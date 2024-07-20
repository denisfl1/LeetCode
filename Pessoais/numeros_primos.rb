

class Primo
  attr_accessor :number

    def initialize(number)
      self.number = number
    end


      def Result

      dividendo = 1
      result = 0

        return puts "Digite um número maior que 0" if self.number === 0

        while (dividendo <= self.number)

          if(self.number % dividendo === 0)
            result+=1

          end
            dividendo+=1

        end

    puts  result === 2 ? "#{self.number} é um número Primo" : "#{self.number} não é um número Primo"

  end

end

Primo.new(4).Result()
