## Topics

1. CPU Management

- Process, Thread, Fork, System Call
- Process Scheduling
- Synchronization & Concurrency
- Deadlock and its Handling

2. Memory Management

- Free Space
- Memory Allocation
- Memory Partition
- Process Partition
- Virtual Memory

3. I/O Management

## Operating System

### Definition

- Operating System is interface between user and computer hardware (cpu, memory & i/o).
- OS wants 3 things from CPU
  - CPU shouldn't sit idle
  - Process shouldn't be starved
  - CPU can pick processes based on priority

### OS Types

#### Serial OS

- This OS performs one job after another.

#### Batch OS

- Similar jobs batched together & executed in time
- Disadvantages: Process Starvation, Idle CPU

#### Multi Programming OS

- Ability to load/keep multiple programs in memory.
- When one process needs I/O time, cpu shifts to another process.
- Advantages: Increased throughput
- Disadvantages: Process Starvation

#### Multi Tasking OS

- Multiple tasks by single CPU (time sharing)

#### Multi Processing OS

- Multiple CPU perform multiple tasks
- Advantages: Increased reliability and throughput
- Disadvantages:

#### Real Time OS

- It's a highly available and performant OS.
- Used in places like military & flight where any error is lethal.

#### Distributed OS

- It is an OS which is loosely connected to multiple systems with independent hardware.
- It's job is to properly utilize all the resources to stay performant.

## CPU Management

### Process

- Program is code stored in the secondary memory (hard disk.)
- Process is a program under execution. It is stored in main memory.

#### Process Types

- Event specific
  - CPU bound process
  - I/O bound process
- Nature of process
  - Independent process
  - Cooperative process

#### Process Control Block

- For every process, we have a PCB (process control block).
- It stores information about process such as
  - process id & process state
  - program counter (pointing to next instruction), registers
  - memory limits, list of open files and other resources

#### Process States

- Process go throught 5 states (order wise)
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
- There are 3 queues - Job Queue, Ready Queue & I/O Waiting Queue

### Process Scheduling

#### Schedulers and Related Time

- CPU Sheduling is order to decide for ready to running transitions.
- There are 3 types of schedulers
  - Long Term Schedulers (Job Schedulers)
    - New State to Ready State
  - Medium Term Schedulers
    - Waiting State to Ready State
  - Short Term Schedulers (CPU Schedulers)
    - Ready State to Running State
- Scheduling Criteria
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

#### Scheduling Algorithms

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
- We use a GANTT chart to show order of process.

### Synchronization and Concurrency

#### Race Condition

- When we consider cooperative processes, any process may utilize any resource at any given time, then the outcome is based on the order of execution.
- Producer Consumer Problem
  - Producer create items place in shared memory (buffer)
  - Consumer uses items by accessing from buffer
  - There is a count variable which tracks no of available items in buffer.
  - Count is updated in 3 steps
    - accumulator <- count
    - accumulator <- ac++ or ac--
    - count <- accumulator
  - If producer produces an item and at step 2 of count increment, consumer consumed one, then final value of count will depend on order of execution.

#### Critical Section Problem & Solutions

- The solution is to keep the shared resource in a safe region called critical section. Before critical section, entry section should be there which would allow only 1 process to enter at any moment of time.
- Any solution implemented for critical section problem should satisify 3 conditions
  - Mutual Exclusion : Only 1 process should be allowed in critical section
  - Progress : 1 process should not stop other process from entering CS
  - Bounded Waiting : There should be limit to waiting time of process to enter CS
- Classical problems of Critical Section
  - Producer-Consumer Problem (Bounded Buffer)
  - Reader-Writer Problem
  - Dining Philosophers Problem
  - Sleeping Barber Problem
- Solutions of Critical Section
  - It is categorized in 2 types
    - Busy waiting (when process not in cs, waits in entry section)
    - Non-busy waiting (when process not in cs, sleeps)
  - There are many solutions are
    - Turn Vairable
    - Peterson Algorithm
    - Semaphores
    - Locks
- Semaphores
  - It is a control variable which supports only 2 operations
    - P or Wait (Decreases semaphore value)
    - V or Signal (Increases semaphore value)
  - There are 2 types of semaphores
    - Binary Semaphore (Mutex)
    - Counting Semaphore

### Deadlock

#### Deadlock defiition, condition and solutions

- Deadlock is a situation in which a process is waiting for a resource which is held by another process.
- There are 4 conditions for Deadlock
  - Mutual Exclusion
  - No Preemption
  - Hold and Wait
  - Circualr Wait
- Deadlock handling strategies
  - Deadlock prevention
    - Make any of 4 condition false
  - Deadlock avoidance
    - Resource allocation graph
    - Bankers Algorithm (Safety algorithm)
  - Deadlock detection
    - Wait-for-graph
  - Dection recovery
    - Preempt process
    - Preempt resource
- If there are m resources, n process & Ri resource requirement of each resource, then for a deadlock to not occur
  - sum(Ri) < (m+n) or m >= sum(Ri - 1) + 1

## Memory Management

### Free Space Management

- Bit Vector / Bit Map (0/1 denote if a space if free or not)
- Linked List (each free space points to another free space)
- Grouping (stores and start and end of free space)
- Counting (1 block stores information about free blocks)

### Memory allocation methods

- Contiguous allocation (Space may be wasted)
- Linked allocation (Random allocaiton but serial access not allowed)
- Indexed allocation

### Memory partition

- Type of partitioning
  - Fixed size partition
    - Interval fragmentation can be occured
  - Variable size partition
    - External fragmentation can be occured
    - Internal fragmentation can also be occured but it can be handled by compaction algorithm by defragmentation technique.
- Type of memory
  - Secondary Memory : Tracks, Sections : Cyclinders
  - Main Memory/Cache : Blocks, Doors : Sets

### Process Partition (Logical Partitioning)

- There are 2 types
  - Equal Size : Pages (= frame size of main memory)
  - Variable Size : Segments
- cpu generate virtual address: page no + word offset
- virtual address is translated into physical address (main memory address) which is frame number + word offset
- Which page is loaded into which frame is maintained in a page table.
- page table entry = frame no + valid bit + dirty bit + replacement bit + protection bit
  - frame no => location in main memory
  - valid bit => if data is present there or not
  - dirty bit => if data is modified there or not
  - replacement bit => replace page or long lasting page
  - protection bit => read/write/modify rights
- page table is also store in main memory, if its size is more than frame size, then page table is further partitioned and this is called multilevel paging.
- page table base registers stoer where the outermost page table is stored.
- In this, L+1 times main memory is accessed which becomes slow and hence we use a faster memory (cache) called Translation Look Aside Buffer (TLB) which holds frequently accessed page information.

### Virtual Memory

- When there is no sufficient space in main memory, then portion of secondary memory acts as main memory which is called virtual memory.
- The communication between main memory and secondary memory happens in form of swap-in and swap-out.
- When no of swap in and swap out are more then execution time < swapping time (transfer) => This is called thrashing
- To avoid thrashing, demand paging is used in which instead of loading all process into MM, load only required pages.
- Page replacement algorithms
  - First in First out (FIFO)
    - It has a problem known as Belady anamoly effect in which sometimes when the number of frames increases, the faults also increases instead of decreasing.
    - Page fault is when requested page is not in main memory.
  - Least Recently Used (LRU)
  - Optimal
- If f is page fault rate, t1 is hit time, t2 is fault recovery time.
- Then avg. access time = f*t2 + (1-f)*t1
- Question
  - page size = 8kb
  - physical address = 32bit
  - page table entry = frame no + 1 valid bit + 1 dirty bit + 3 permission bit
  - page table size = 24MB
  - Find length of virtual addresss
- Solution
  - page size = 2^13 bits => word offset = 13bit
  - physical address = frame no + word offset => 32 = f + 13 => f = 19bits
  - page table entry = 19 + 1 + 1 + 3 = 24bit => No. of PTE = 24MB/24bit = 2^23
  - page number = 23 bits
  - virtual address = page number + word offset = 23 + 13 = 36bits

## I/O Management

### Disk Scheduling

- FCFS
- SSTF (Nearest Cylinder First)
- SCAN (Elevator Algorithm)
- C-SCAN
- LOOK
- C-LOOK

### File Systems

- File divided into blocks, which block is assigned is maintained in index order

### System calls

- fork => Used of process creation
- x fork call generates 2^x process (1 parent and remaining child)
- fork returns process id to parent and 0 to child process
