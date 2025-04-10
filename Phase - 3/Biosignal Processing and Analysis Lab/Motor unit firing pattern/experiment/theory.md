Motor neurons (MNs) or motoneuron or efferent neuron are neuronal cells located in the central nervous system (CNS) controlling motor planning, execution and movement. The cell body of motoneurons located in the motor cortex, brainstem or the spinal cord, and the axons projects to the spinal cord or outside of the spinal cord to directly or indirectly control effector organs such as muscles and glands. The expanded axon tips to the muscle fiber membrane form a neuromuscular junction. The skeletal muscle fibres were stimulated by the chemicals released from a somatic motor neuron. 

&nbsp;There are two main types of motor Neurons, 

&nbsp;
a)	**Upper Motor Neurons**: Located in the pre-motor and primary motor region of the cerebral cortex ie in the precentral gyrus. Also known as the “motor strip.” The upper MNs make glutamatergic connections with lower MNs located in the CNS. The type of cells present in the premotor cortex is Beta cells.
&nbsp;

b)	**Lower Motor Neurons**: Located in specific nuclei in the brainstem as well as in the ventral horn of the spinal cord. Characteristic feature of lower MNs is their axonal extension and connection outside of the CNS. Lower MNs are cholinergic and receive inputs from upper MNs, sensory neurons (SNs) as well as from interneurons (INs). Types of lower motor neurons are alpha motor neurons, beta motor neurons, and gamma motor neurons. Lower MNs are classified into three groups according to the type of target they innervate: (i) branchial, (ii) visceral, and (iii) somatic MNs.

&nbsp;
Also Spinal motor neurons (SpMNs ) were located in the ventral horn of the spinal cord and control effector muscles in the periphery. These neurons were responsible for the contraction of effector muscles in the periphery. The motor movement and control process vary from a simple reflex loop to a complex network of neural patterns that communicate throughout the Central Nervous System (CNS) and Peripheral Nervous System (PNS). 

&nbsp;

**Motor control and its Neurophysiology**

&nbsp;
Motor Control is defined as the process of initiating, directing, and grading purposeful voluntary movement. It defined as that the motor control have the ability to regulate mechanisms essential to movement. 

Motor controls in the human body begins at the frontal and posterior parietal cortex (PPC). These areas carry out high-level, abstract thinking to determine what actions to take in a given situation. The PPC receives input from the somatosensory cortex to get information on the current state of the body. It also has extensive interconnection with the prefrontal cortex, which is responsible for abstract strategic thoughts. The planning of the action sequence is then carried out by the premotor area (PMA) and the supplementary motor area (SMA), both located in Brodmann area 6 of the cortex.
&nbsp;

After a sequence of action is planned in PMA or SMA, it requires input from the basal ganglia to actually initiate the movement. The basal ganglia contain the direct and indirect pathway. The direct pathway helps select a particular action to initiate, while the indirect pathway filters out other inappropriate motor programs. In the direct pathway, the striatum (putamen and caudate) receives input from the cerebral cortex and inhibits the internal globus pallidus (GPi). In the resting state, GPi is spontaneously activated and inhibits the oral part of the ventral lateral nucleus (VLo) of the thalamus. Thus, inhibition of GPi will enhance the activity of VLo, which in turn excites the SMA. In the indirect pathway, the striatum excites GPi through the subthalamus nucleus (STN), which then suppresses VLo activity and in turn inhibits SMA.
&nbsp;

After the basal ganglia helps to filter out unwanted motor programs and focus on the selected programs.The primary motor cortex (M1) will be responsible for  low-level executions. In the layer V of M1, there are population of large neurons pyramidal in shape that project their axon connections down the spinal cord through the corticospinal track. These axons connect with motor neurons in the spinal cord monosynaptic ally to activate muscles fibers. Motor neurons in the spinal cord receive inputs from the M1 pyramidal cells through the corticospinal track. They also receive the input indirectly from the motor cortex and cerebellum through the rubrospinal track, routed via the red nucleus in the midbrain. Motor neurons in the ventral horn of the spinal cord bundle together to form the ventral root, which exits the spinal cord and joints with the dorsal root to form a mixed spinal nerve. The spinal nerve further branches out to smaller nerve fibers that innervate various muscles of the body.
&nbsp;

One motor neuron may supply multiple muscle fibers, collectively known as one motor unit. A muscle consists of multiple muscle fibers, grouped into motor units of various sizes, each of which may be supplied by different motor neurons. The motor control pathway of the human body goes from high-level associative area of the brain, mediated by the motor cortex, through the spinal cord to the individual muscle fibers. r. Each of these stages offers different signal modalities and features that can be exploited for motor decoding.
&nbsp;

**Mathematical Modeling of Motor Units**
&nbsp;

The term motor unit applied to a single motor neuron and all the muscle fibers that it stimulates. When a motor neuron fires, all the muscle fibers in the motor unit contract at once. The size of a motor unit varies from few fibers in the eye muscles to over a thousand fibers in the large leg muscles. A collection of motor units is referred to as a motor pool. Groups of motor units in a muscle were innervated to coordinate contraction of whole muscle and generate appropriate movement. All the motor units within a muscle were considered as motor pool.
 &nbsp;

The electric signal produced by a single contraction of a single muscle fiber called single fiber action potential (SFAP) were generally mathematical modelled. The spiking of action potentials with a contracting muscle fiber were computationally modelled with algorithms. The EEG data relating to motor planning, execution and motor imaginery obtained from different cotical regions of human brain were modelled by  adaptive exponential integrate and fire neuron model (AdeX). The motor unit models were used to stimulate motor firing rates and isometric muscle contractions. The firing rate λi(t) of a motor unit denotes the frequency at which its motoneuron discharges.The model accurately estimate isometric contractions across a wide range of target levels.The computational modelling of  motor unit firing patterns provide an insight to complex mechanisms of motor movement and control which is key for many current BCI related experimental approaches.
&nbsp;

**Adaptive Exponential integrate and fire neuron model (AdeX) of Motor units**
&nbsp;

The dynamics of biological neural networks and their connection to physiological, biochemical and anatomical properties to cognitive functions were understood by computational modelling of these neural networks. The modelling of nerve impulses predicts different event related task and its neural mechanisms computationally. AdeX is a two-dimensional integrate-and-fire model that combines an exponential spike mechanism with an adaptation equation. It yields a closed-form expressions for instantaneous and steady-state firing rates and generate a wide range of spike patterns.
&nbsp;

The first equation of AdeX model describes the dynamics of the membrane potential and includes an activation term with an exponential voltage dependence. Voltage is coupled to a second equation which describes adaptation. Both variables are reset if an action potential has been triggered. The combination of adaptation and exponential voltage dependence gives rise to the name Adaptive Exponential Integrate-and-Fire model. The adaptive exponential integrate-and-fire model is capable of describing known neuronal firing patterns like adapting, bursting, delayed spike initiation, initial bursting, fast spiking, and regular spiking. Adaptive exponential integrate-and-fire model AdEx were introduced Brette and Gerstner in 2005.
&nbsp;

![image](https://user-images.githubusercontent.com/79529753/127387913-c1fd4d05-e945-40ab-86c7-cdf14bf7ee4f.png)
&nbsp;

where V is the membrane potential, w the adaptation variable, I the input current, C the membrane capacitance, gL the leak conductance, EL the leak reversal potential, VT the threshold, ΔT the slope factor, a the adaptation coupling parameter and τw is the adaptation time constant.
&nbsp;

The exponential nonlinearity describes the process of spike generation and the upswing of the action potential. In the mathematical definition of the model, a spike is said to occur at the time tf when the membrane potential V diverges towards infinity. In practice, integration of the model equations is usually stopped and the firing time tf recorded when the membrane potential reaches a finite value ie  0 mV or +30mV. The downswing of the action potential is not described by the model but replaced by a reset of the voltage to a fixed Vr
&nbsp;

![image](https://user-images.githubusercontent.com/79529753/127388280-e5c59d3a-e367-4f7a-b949-579b14045f39.png)

&nbsp;

At the same time, the adaption value is also changed by an amount b

![image](https://user-images.githubusercontent.com/79529753/127388321-76e39fca-473f-4a84-b66c-1e9720681d11.png)

&nbsp;

The interaction of the discrete resets with the differential equations results in a rich dynamical behavior. The AdEx model can reproduce 96% of the spike times of a regular-spiking Hodgkin–Huxley-type model with an Im current for adaptation in response to fluctuating synaptic inputs and an excellent spike timing predictions were also found for real cortical neurons using algorithms.






