# Topics
1. Process
2. Threads
3. Inter Process Communication
4. Concurrency and Synchronization
5. Deadlocks
6. CPU Scheduling
7. Memory Management
8. Virtual Memory
9. File Systems

It can be categorised in 3 parts
1. CPU Management
2. Memory Management
2. I/O Management

## Operating System

* Operating System is interface between user and computer hardware (cpu, memory & i/o).
* OS wants 3 things from CPU
  - CPU shouldn't sit idle
  - Process shouldn't be starved
  - CPU can pick processes based on priority
* It is of various types such as 
  - Serial OS
    - This OS performs one job after another.
  - Batch OS
    - Similar jobs batched together & executed in time
    - Disadvantages: Process Starvation, Idle CPU
  - Multi Programming OS
    - Ability to load/keep multiple programs in memory.
    - When one process needs I/O time, cpu shifts to another process.
    - Advantages: Increased throughput
    - Disadvantages: Process Starvation
  - Multi Tasking OS
    - Multiple tasks by single CPU (time sharing)
  - Multi Processing OS
    - Multiple CPU perform multiple tasks
    - Advantages: Increased reliability and throughput
    - Disadvantages: 
  - Real Time OS
    - It's a highly available and performant OS.
    - Used in places like military & flight where any error is lethal.
  - Distributed OS
    - It is an OS which is loosely connected to multiple systems with independent hardware.
    - It's job is to properly utilize all the resources to stay performant.


## Process

* Program is code stored in the secondary memory (hard disk.)
* Process is a program under execution. It is stored in main memory.
* Process are categorised based on 2 types :-
  - Event specific
    - CPU bound process
    - I/O bound process
  - Nature of process
    - Independent process
    - Cooperative process
* For every process, we have a PCB (process control block). 
* It stores information about process such as 
  - process id & process state
  - program counter (pointing to next instruction), registers
  - memory limits, list of open files and other resources
* Process go throught 5 states (order wise)
  - New/Born state
    - When process is just created.
  - Ready/Runnable state
    - When process is loaded in memory.
    - When process in running state is interrupted by another process or finishes its time quantum or it's i/o work is finished it is sent back to ready state (main memory).
  - Running state
    - When process is being executed by cpu.
    - When process move from ready state to running state, it's called dispatch.
    - When process move from running state to ready state it's called preemption.
  - Waiting/Blocked state
    - When process waits for i/o event.
  - Exit/Terminated state
    - When process finish its execution or is terminated by cpu.
  - Along with these 5 states, 2 more are there 
    - Suspend ready
    - Suspend wait.
  - When ready queue is full, the process are sent to suspend ready and when it becomes free, then it pulls from suspend ready. Similar for suspend wait.
* There are 3 queues - Job Queue, Ready Queue & I/O Waiting Queue

## CPU Scheduling

* The order to decide for ready to running transitions.
* There are 3 types of schedulers
  - Long Term Schedulers (Job Schedulers)
    - New State to Ready State
  - Medium Term Schedulers
    - Waiting State to Ready State
  - Short Term Schedulers (CPU Schedulers)
    - Ready State to Running State
* Scheduling Criteria
  - Arrival Time
    - The process when process arrived into ready state (main memory).
  - Waiting Time
    - Time process spend in ready and waiting state.
  - Burst Time
    - It is time required by process to complete
  - Completion Time
    - Time at which process finishes execution
  - Turn Around Time
    - Total time from creation to termination.
    - There are 2 ways to calculate it
      - Burst Time + Waiting Time
      - Completion Time - Arrival Time
* Scheduling Algorithms
  - These are categorized into 2 types
    - Non-preemptive scheduling
      - First Come First Serve
      - Shortest Job First
      - Highest Response Ratio Next
      - Priority
    - Premptive scheduling
      - Preemptive SJF (Shortest Remaining Time)
      - Round Robin
      - Preemptive Priority
      - Multilevel Queue
      - Multilevel Feedback Queue
* We use a GANTT chart to show order of process.

