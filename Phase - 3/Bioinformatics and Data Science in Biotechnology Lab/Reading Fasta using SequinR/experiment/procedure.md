

1.	Follow ( [https://vlab.amrita.edu/index.php?sub=3&brch=311&sim=1835&cnt=2)](https://vlab.amrita.edu/index.php?sub=3&brch=311&sim=1835&cnt=2%29) to install R in personal computer.
2.	Install the SeqinR package.
3.	To load “SeqinR” R package follow > library("seqinr") 
4.	To write a sequence to a FASTA-format file in R, use “write.fasta()”function from the SeqinR R package.
5.	Name the output file using the “file.out” argument (input).
6.	Read FASTA format file into R using the read.fasta() function from the SeqinR R package.

&nbsp;

Example
1.	If a user stored DEN-1 Dengue virus sequence in a vector dengueseq, for writing the sequence to a FASTA-format file called “den1.fasta” that contains the sequence labelled as “DEN-1”, follow 
> `write.fasta(names="DEN-1", sequences=dengueseq, file.out="den1.fasta").`

2.	To read this FASTA format file follow 
> `library("seqinr")`
>`dengue <- read.fasta(file = "den1.fasta")` 

3.	`“den1.fasta”` must be saved in the “My Documents” folder of the user’s PC.
Procedure to work the simulator
1.	A default FASTA file is available on the R platform.
2.	User can choose their required sequence and can load the sequence.fasta file into the platform.

 ![](/experiment/images/1.png)
Fig.1. Platform for writing and reading FASTA format in R

3.	In case of sequence files other than FASTA file, user have to upload the file and rewrite the name sequence.fasta" into filename.fasta format.
4.	Follow the code in the command window: 
`library("seqinr")# This line importing the seqinr library ` 
`dnaseq<- read.fasta(file = "sequence.fasta")`
`
5.	Click Execute Button for output.    