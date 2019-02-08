require ("minitest/autorun")
require ("minitest/rg")
require_relative ("../testing_task_2")
require ('pry')

class Testtask2 < MiniTest::Test

def setup
  @cardgame = CardGame.new
  @card1 = Card.new("Spades", 1)
  @card2 = Card.new("Dimonds", 2)
  @card3 = Card.new("Hearts", 3)

  @cards1 = [@card1, @card2]
  @cards2 = [@card2, @card3]
end

def test_checkforAce
  assert_equal(true, @cardgame.checkforAce(@card1))
  assert_equal(false, @cardgame.checkforAce(@card2))
end

def test_highest_card
  assert_equal("2 of Dimonds is highest", @cardgame.highest_card(@card1, @card2))
  assert_equal("3 of Hearts is highest", @cardgame.highest_card(@card2, @card3))
end

def test_cards_total
  assert_equal("You have a total value of 3", CardGame.cards_total(@cards1))
  assert_equal("You have a total value of 5", CardGame.cards_total(@cards2))

end





end
