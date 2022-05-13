package comp;

import java.util.Arrays;

public class ChampagneTower {
    public static void main(String[] args) {
        System.out.println( champagneTower(25,6,1) );
    }

//    public static double champagneTower(int poured, int query_row, int query_glass) {
//        double[][] triangle = new double[query_row + 1][query_glass + 2];
//        triangle[0][0] = poured;
//
//        for (int i = 0; i < query_row; i++) {
//            for (int j = 0; j <= query_glass; j++) {
//                double rest = Math.max(triangle[i][j] - 1.0, 0); //if -1, becomes negative, then set it to 0, cause negVal just means nothing is inside it.
//                triangle[i+1][j] += rest / 2.0;
//                triangle[i+1][j+1] += rest / 2.0;
//            }
//        }
//
//        System.out.println(Arrays.deepToString(triangle));
//        System.out.println(triangle[query_row][query_glass]);
//
//        return Math.min(triangle[query_row][query_glass], 1.0); //if num is greater than 1 then just write 1
//    }

        public static double champagneTower(int poured, int query_row, int query_glass) {
            double[][] A = new double[102][102];
            A[0][0] = (double) poured;
            for (int r = 0; r <= query_row; ++r) {
                for (int c = 0; c <= r; ++c) {
                    double q = (A[r][c] - 1.0) / 2.0;
                    if (q > 0) {
                        A[r+1][c] += q;
                        A[r+1][c+1] += q;
                    }
                }
            }

        System.out.println(Arrays.deepToString(A));

            return Math.min(1, A[query_row][query_glass]);
        }

}