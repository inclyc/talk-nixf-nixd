{
  a.x = 1;
#   ^ Previously defined here 
  a = {
    x = 2;
  # ^ Duplicate attribute 'x'
  };
}