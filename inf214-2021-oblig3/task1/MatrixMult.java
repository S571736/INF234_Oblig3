
package task1;

import java.util.*;

public class MatrixMult {

    public static void multiply(double[][] A, double[][] B, double[][] C) {
        List<Thread> threads = new ArrayList<>();
        for (int i = 0; i < A.length; i++) {
            RowMultiplierTask task = new RowMultiplierTask(C, A, B, i);
            Thread thread = new Thread(task);

            thread.start();//Thread.run();?
            threads.add(thread);


            // TODO: your solution here





            if (threads.size() % 10 == 0) { waitForThreads(threads); }
        }
        if (!threads.isEmpty()) { waitForThreads(threads); }
    }

    private static void waitForThreads(List<Thread> threads) {
        for (Thread thread : threads) {
            try {
                thread.join();





                // TODO: your solution here




                
            }
            catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        threads.clear();
    }
}


