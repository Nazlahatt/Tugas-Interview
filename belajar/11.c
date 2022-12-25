#include <stdio.h>

int main(void) {

  for (int i = 1; i <= 5; i++) {

   
    for (int j = 1; j <= i; j++) {
      printf("%d ", j);
    }
    
   
    for (int j = 0; j < 5 - i; j++) {
      printf("    ");
    }
    
    for (int k = i; k >= 1; k--) {
      printf("%d ", k);
    }
    
    
    printf("\n");
  }
  
  for (int i = 4; i >= 1; i--) {
    // Mencetak spasi sebelum mencetak angka
    // for (int j = 0; j < 5 - i; j++) {
    //   printf(" ");
    // }
    // Mencetak angka dari 1 hingga i
    for (int j = 1; j <= i; j++) {
      printf("%d ", j);
    }
    
  
    for (int j = 0; j < 5 - i; j++) {
      printf("    ");
    }
    
    for (int k = i; k >= 1; k--) {
      printf("%d ", k);
    }
    printf("\n");
  }
  
  
  return 0;
}